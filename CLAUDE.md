# Companions

A small, static website (to become an installable iPhone/iPad app) that sets out an Aristotelian curriculum for the modern student with an AI tutor.

- **Home**: a call to arms championing learning and the Greek-derived tradition.
- **World View**: an interactive mind map of 17 domains in four branches drawn from Aristotle (Organon/instruments, Theoria/knowing, Praxis/acting, Poiesis/making). Domain → sub-areas → cross-links, reading lists and off-ramps.
- **The Story**: how the Companions learnt at Mieza, and the later inheritances (Lyceum, Mouseion, Bede’s monastery, House of Wisdom, the university, bottega, Lincei, Royal Society, Lunar Society, Bohr’s institute, Xerox PARC, SpaceX, AI), with the structure/curiosity spectrum. Sections are numbered I–II.
- **Curriculum**: methods, criticism, the order, seven stages (Α–Ζ), spiral table, time, AI rules, library. Sections are numbered I–VII.

Owner: Mike. Read `PLAN.md` for the current plan (work through it by item ID, log decisions there) and `ROADMAP.md` for the original workstreams.

## Run it

No build step. Either open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Routes are hash-based: `#/`, `#/story`, `#/world-view`, `#/world-view/<domain>`, `#/world-view/<domain>/<sub>`, `#/curriculum`, `#/glossary`, `#/glossary/<term>`. In-page section links use `#s-` (Story) and `#c-` (Curriculum) and are intercepted by the router.

After any data edit, run `node scripts/check-data.js`.

## Hosting and web app

- Live at https://companions.mbattye.workers.dev (a Cloudflare Worker serving static assets). GitHub: `mbattye/companions` (private). Every push to `main` deploys: Workers Builds runs `sh scripts/build.sh` (dashboard Build command), then `npx wrangler deploy`, and `wrangler.jsonc` serves `dist/` only. The script copies public files only, so add any new top-level site file to its `FILES` list.
- It installs as a web app (Safari → Share → Add to Home Screen). `manifest.webmanifest` and `assets/icons/` define the icon; `sw.js` caches the site for offline use (network first, cache as fallback).
- **Bump `VERSION` in `sw.js` whenever you add, rename or remove a file in its `PRECACHE` list.** Content edits need no bump.
- Icons are generated from `assets/icons/icon.svg` (`qlmanage -t -s <size>` renders it on macOS).

## Structure

```
index.html            page shell and all static copy (home, story and curriculum prose)
css/styles.css        every style; design tokens at the top
js/data/domains.js    C.branches, C.domains (with subs), C.links
js/data/curriculum.js C.stages, C.mixCategories, C.spiral, C.spectrum
js/data/reading.js    C.reading  (per domain, tiers Begin | Classic | Deeper)
js/data/resources.js  C.resources (per sub-area off-ramps)
js/data/prompts.js    C.prompts (tutor prompt: base rules, stage and sub-area templates)
js/data/glossary.js   C.glossary (Greek terms: transliteration, polytonic, meaning, note, citation)
js/app.js             router, SVG mind map, panels, curriculum renderers, tutor prompts, search
manifest.webmanifest  web app name, colours, icons
sw.js                 service worker (offline cache)
assets/icons/         icon.svg (master), PNG sizes, favicon.svg
scripts/check-data.js data validator
scripts/build.sh      copies the public site into dist/ for hosting
SOURCES.md            source note for every historical and textual claim
```

Data files are plain scripts that attach to `window.C` (not ES modules) so the site works from `file://`. Keep it that way unless a build step is deliberately introduced.

## Data rules

- IDs are short, lowercase and unique across all sub-areas; links reference sub-area IDs. After editing data, check every link and every `C.spiral` / `C.reading` key resolves.
- Every domain must have: `branch`, `greek`, `desc`, `aristotle`, `frontier`, 5–6 `subs`, a `C.spiral` row and a `C.reading` list.
- Off-ramps (`C.resources`) are **pointers, not a syllabus**: at most 3 per sub-area, free where possible, durable sources, each with `type` (video | article | course | puzzle | tool), `title`, `by`, `url`, optional `note`. Never bulk-add. The student is meant to find their own sources.
- Inline HTML in data strings is limited to `<em>`.
- Tutor prompts (`C.prompts`) are templates, filled by `app.js` from the other data files. The base prompt must keep the seven rules of Curriculum VI in step with `index.html`; placeholders are checked by `check-data.js`.

## Content and voice

- British English (colour, organisation, learnt, practise as verb). Curly quotes and apostrophes (’ “ ”). En dashes for ranges (343–340 BC); no em dashes.
- Short sentences, active voice, confident but honest. No marketing register: headings state rather than ask, no superlatives (“the most … ever built”), no “not just X, it’s Y”. Antithesis (“a tutor, not a substitute”) is part of the voice, so keep it for claims that matter and cut it elsewhere. Mark conjecture as conjecture; no invented quotations. Every classical citation must be checkable (work + book/section).
- Greek is polytonic and set in `.gr` (GFS Didot), with `lang="grc"` on the Greek itself (not on mixed Greek and English). Check accents and breathings when editing.
- Glossary terms link automatically: the first `<em>` in a page or panel whose text is a glossary transliteration becomes a link to its entry. Write the term in `<em>` and add it to `C.glossary`; no markup needed.
- Our own prescriptions (stage ages, time mixes, spiral depths, spectrum positions) are labelled as our reading, not history.

## Design system

Minimal, classical, precise. Beauty through proportion, type and restraint; small Greek touches only (meander band, column mark, Greek numerals, polytonic labels). No gradients, shadows, emoji, rounded cards or loud colour.

- Type: Cormorant Garamond (display), Spectral (text), Marcellus SC (small caps labels), GFS Didot (Greek).
- Tokens in `:root`: `--ground --ground-2 --ink --ink-2 --stone --rule --rule-2 --aegean --bronze` plus branch colours `--q-org --q-the --q-pra --q-poi`. Dark theme redefines the same tokens under `prefers-color-scheme` and `[data-theme="dark"]`. Never hard-code a colour outside the token blocks.
- Hairline rules (1px), generous whitespace, left-aligned except the home hero.
- **Reserve palette (Greek pigments and pottery).** Not used by the site, which keeps its own tokens. Kept for future assets such as interactive learning pieces, where the pottery black and orange-red pair is the starting point: pottery black gloss `#141210`, black `#1C1714`, pottery orange-red `#C45D2B`, white `#F7F4EC`, yellow ochre `#D2B45A`, red ochre `#9E2F22`, cinnabar `#E34234`, Tyrian purple `#66023C`, Tyrian red-purple `#990024`. A full site-wide version of this palette (tokens for both themes, icons, manifest) is at the `palette-pigments` tag; it was tried and not adopted.
- Must work at 360px wide (16px gutters, no horizontal scroll), on iPad in both orientations, and on desktop. Respect `prefers-reduced-motion`. Visible keyboard focus everywhere.

## Working agreements

- Keep it dependency-free unless there is a strong reason; ask before adding a framework or build tool.
- Screenshot-check changes at 390, 820, 1180 and 1440 px widths in light and dark before calling a UI change done.
- Commit in small, described steps.
