/* sw.js
 * Offline support for the installed web app.
 * Site files: network first, so an online visit always gets the latest version; the cache is the offline fallback.
 * Google Fonts: the stylesheet is served from cache and refreshed in the background; font files are cached once.
 * Bump VERSION when files are added to or removed from PRECACHE.
 */
const VERSION = "companions-v1";
const FONTS = "companions-fonts";
const PRECACHE = [
  "./",
  "index.html",
  "css/styles.css",
  "js/app.js",
  "js/data/domains.js",
  "js/data/curriculum.js",
  "js/data/reading.js",
  "js/data/resources.js",
  "manifest.webmanifest",
  "assets/icons/icon.svg",
  "assets/icons/favicon.svg",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true })
          .then(hit => hit || (req.mode === "navigate" ? caches.match("index.html") : null))
          .then(hit => hit || Response.error()))
    );
    return;
  }

  if (url.hostname === "fonts.googleapis.com") {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => {
      const fresh = fetch(req).then(res => { c.put(req, res.clone()); return res; });
      if (hit) { e.waitUntil(fresh.catch(() => {})); return hit; }
      return fresh;
    })));
    return;
  }

  if (url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }))));
  }
});
