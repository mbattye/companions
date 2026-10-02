# Companions · Ἑταῖροι

An Aristotelian curriculum for the modern student, assisted by AI.

Companions sets out what is worth knowing and an order in which to learn it, drawn from the way Aristotle taught Alexander and his companions at Mieza. A learner works with a mentor and an AI tutor, and the tutor never does the work for them. It is written to be passed on, family first: a small website that runs on any device, needs no accounts, and anyone may copy and adapt.

Live at **https://companions.mbattye.workers.dev**. Source at **https://github.com/mbattye/companions** (private until it is made public; see `PLAN.md`, item O4).

## What is in it

- **Home**: why learn, and why this tradition.
- **World View**: a map of 17 domains in Aristotle’s four branches (instruments, knowing, acting, making). Open a domain to see its sub-areas, how they connect, what to read and where to go next.
- **The Story**: how the Companions learnt at Mieza, and the rooms that inherited the method, from the Lyceum to the AI lab.
- **Curriculum**: methods, seven stages (Α–Ζ) from wonder to wisdom, the spiral of return, how the time is spent, rules for using the machine, and a library.

## Run it

You need only a web browser.

1. Get the files: on GitHub, **Code → Download ZIP** and unzip it, or clone it:

   ```sh
   git clone https://github.com/mbattye/companions.git
   ```

2. Open `index.html` in the browser. That is all.

Offline use and installing as an app need the site to be served rather than opened from disk. With Python 3 installed:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. On iPhone or iPad, open the live site in Safari and choose **Share → Add to Home Screen**; it then works offline.

## How it is made

Plain HTML, CSS and JavaScript. No framework, no build step and no dependencies, so it should still open in a browser decades from now.

| File | What it holds |
|---|---|
| `index.html` | The page and all the prose of Home, The Story and Curriculum |
| `css/styles.css` | Every style; colours and type are set at the top |
| `js/data/domains.js` | The four branches, 17 domains, their sub-areas and the links between them |
| `js/data/curriculum.js` | The stages, how time is spent, the spiral table, the structure–curiosity spectrum |
| `js/data/reading.js` | Reading list per domain (Begin, Classic, Deeper) |
| `js/data/resources.js` | A few external pointers (“off-ramps”) per sub-area |
| `js/app.js` | Page routing, the map, panels and tables |
| `sw.js`, `manifest.webmanifest`, `assets/icons/` | Offline support, app name and icon |
| `scripts/check-data.js` | Checks the data files for mistakes |
| `scripts/build.sh` | Copies the public files into `dist/` for hosting |
| `SOURCES.md` | A source for every historical and textual claim |
| `PLAN.md`, `ROADMAP.md` | What is being worked on, and decisions made |
| `CLAUDE.md` | House rules: data, voice, design (written for AI assistants, readable by anyone) |

The data files are plain scripts rather than modules, so the site works when opened straight from disk. After changing any of them, run the checker (needs [Node.js](https://nodejs.org)):

```sh
node scripts/check-data.js
```

It reports errors (which must be fixed) and warnings (worth a look).

## How it is hosted

The live site is a Cloudflare Worker serving static files. Every push to `main` on GitHub deploys automatically: Cloudflare runs `sh scripts/build.sh`, which copies only the public files into `dist/`, then `npx wrangler deploy`, which publishes `dist/` as set in `wrangler.jsonc`. Notes such as `PLAN.md` stay in the repository and off the web.

Nothing about it depends on Cloudflare. Any host that serves static files will do: run `sh scripts/build.sh` and upload the contents of `dist/`.

## Make your own family’s copy

Companions is meant to be adapted: your own reading, your own order, your own family’s additions.

1. **Copy it.** With a GitHub account, press **Fork** on the repository page. Without one, download the ZIP (see *Run it*) and keep the folder somewhere safe.
2. **Edit it.** Any text editor will do.
   - Prose on Home, The Story and Curriculum: `index.html`.
   - Domains and sub-areas: `js/data/domains.js`. Every domain needs a branch, Greek name, description, an “In Aristotle” line, a frontier and 5–6 sub-areas, plus a row in `C.spiral` (`curriculum.js`) and a reading list (`reading.js`). Sub-area IDs are short, lowercase and unique; links refer to them.
   - Reading lists: `js/data/reading.js`. Off-ramps: `js/data/resources.js` (at most three per sub-area; they are pointers, not a syllabus).
   - Stages, time and the spiral: `js/data/curriculum.js`.
   - The name: `<title>` in `index.html`, and `name` and `short_name` in `manifest.webmanifest`.
3. **Check it.** Run `node scripts/check-data.js`, then open `index.html` and look.
4. **Publish it** (optional).
   - *Cloudflare, as here:* first change `name` in `wrangler.jsonc` to your own (the Worker’s name in Cloudflare must match it). Then create a free Cloudflare account, go to **Workers & Pages → Create application → Import a repository**, choose your fork, set the build command to `sh scripts/build.sh` and leave the deploy command as `npx wrangler deploy`. Every push to `main` then deploys.
   - *Anywhere else:* run `sh scripts/build.sh` and upload `dist/` to any static host.
   - If you add, rename or remove a file listed in `PRECACHE` in `sw.js`, raise its `VERSION` number so installed copies pick up the change. If you add a new top-level file the site needs, add it to `FILES` in `scripts/build.sh`.
5. **Keep the licences.** Leave `LICENSE` and `LICENSE-CONTENT` in place, credit the original (see below), and publish your changes to the content under the same CC BY-SA 4.0 licence.

## Working on it

`PLAN.md` holds the current plan, with numbered items and a log of decisions. `CLAUDE.md` holds the house rules: British English, no em dashes, every classical citation checkable, and the design system. Read both before changing anything substantial.

## Licences

Companions is open so that family, or anyone else, can keep it going.

- **Content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** (full text in `LICENSE-CONTENT`). This covers the prose and copy in `index.html`, everything in `js/data/`, the icon artwork in `assets/`, and the project’s documents (`SOURCES.md`, `PLAN.md`, `ROADMAP.md`, `CLAUDE.md`, this README). You may share and adapt it, with credit, provided your version carries the same licence.
- **Code: [MIT](https://opensource.org/license/mit)** (full text in `LICENSE`). This covers `js/app.js`, `css/`, `sw.js`, `scripts/`, `manifest.webmanifest` and `wrangler.jsonc`.

A file not named above counts as content. Quotations from published translations stay under their own terms and appear here as short quotation; Perrin’s Plutarch (1919) is in the public domain. The fonts are served by Google Fonts under the SIL Open Font Licence.

Credit for reuse: “Companions, by Mike Battye, CC BY-SA 4.0”, with a link to the source.
