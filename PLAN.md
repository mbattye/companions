# Companions: plan for the next phase

Companions is meant to last: a way of passing knowledge on to the next generation, family first. It is not a product. Every item below is judged by three tests: **resilient** (still works and can still be continued in thirty years), **useful** (a learner or a mentor can act on it this week), **encompassing** (covers the whole map, in an order worth following).

Written 2 October 2026. `ROADMAP.md` keeps the original workstreams; this file is the working plan from here. Where they overlap (off-ramps, reading lists), this file wins.

## How to use this file

- Start a session with: *Read `PLAN.md` and work on item L1* (or whichever item is next).
- Work roughly top to bottom. Items carry IDs (O1, L1, V1, R1…) so they can be referred to across sessions.
- One item = one or more small commits. Tick the box when its **Done when** is met, and add a dated line to the **Decisions log** at the bottom if a choice was made.
- **Decision** lines need Mike's answer before or during the work. Ask, don't assume.
- The ground rules in `CLAUDE.md` still apply: dependency-free, works from `file://`, 360px with no sideways scroll, screenshot checks at 390/820/1180/1440 in light and dark, `node scripts/check-data.js` after data edits, British English, no em dashes, no marketing register.
- Anything that stores a learner's work is **local-first**: no accounts, no server, always exportable.

---

## 1. Open source and custody (first)

So the work can outlive any one account, and so family or anyone else can legally continue it.

- [x] **O1. Choose the licences.**
  Recommendation: **CC BY-SA 4.0 for content** (the prose in `index.html`, everything in `js/data/`, `SOURCES.md`) and **MIT for code** (`js/app.js`, `css/`, `sw.js`, `scripts/`). Share-alike keeps derivatives open, which suits a family commons. The alternative is CC BY 4.0, which lets schools and others reuse it without share-alike.
  Notes: quotations from other translations stay under their own terms (short quotes are fair dealing). Perrin's Plutarch (1919) is public domain. If fonts are ever self-hosted, they carry the SIL Open Font Licence.
  **Decision:** CC BY-SA 4.0 + MIT (decided 2026-10-02).
  **Done when:** `LICENSE` (MIT, code) and `LICENSE-CONTENT` (CC text, content) exist; the README says which files fall under which.

- [x] **O2. Pre-flight before going public.**
  - All 14 existing commits are authored `Mike Battye <mbattye@me.com>`, and a public repo exposes that address. **Decision:** accept it, or switch future commits to GitHub's noreply address (`git config user.email <id>+mbattye@users.noreply.github.com`). Rewriting existing history is possible but disruptive, so not recommended. **Decided 2026-10-02:** accept it; commits keep `mbattye@me.com`.
  - History scanned on 2 October 2026: no keys or secrets found.
  - Confirm `CLAUDE.md`, `ROADMAP.md`, `PLAN.md` and `SOURCES.md` are fine to publish (nothing private in them today). **Confirmed 2026-10-06.**
  **Done when:** decisions recorded in the log.

- [x] **O3. A README for strangers and descendants.**
  What Companions is and why, how to run it (open `index.html`, or `python3 -m http.server`), how it is hosted, the licences, and **how to make your own family's copy** (fork, edit `js/data/`, deploy).
  **Done when:** someone with no context can run and fork it from the README alone.

- [x] **O4. Make the repository public.**
  `gh repo edit mbattye/companions --visibility public --accept-visibility-change-consequences`. This is outward-facing and irreversible in practice (copies get made), so only with Mike's explicit go-ahead at the time. Cloudflare deploys keep working unchanged.
  **Done when:** public, with licences visible on GitHub.

- [ ] **O5. Mirrors and an annual archive.**
  A second remote on a different host (Codeberg or GitLab), pushed alongside GitHub. Once a year: `git bundle create companions-YYYY.bundle --all`, plus a printed/PDF snapshot when one exists (see V5), saved to family storage.
  **Done when:** second remote exists; the first bundle is saved; the steps are written in the README.
  *Progress 2026-10-07:* first bundle and ZIP made in `archive/` (git-ignored, kept locally for now); steps in the README and `STEWARDS.md`. Mirror skipped for now; the README says how to add one.

- [x] **O6. Steward and restore note.**
  A short section (README or `STEWARDS.md`): who looks after Companions, and how to restore it from a bundle if GitHub and Cloudflare are both gone (clone, open `index.html`, redeploy anywhere static).
  **Done when:** a non-developer family member could follow it.

- [ ] **O7. Annual review ritual.**
  Once a year: run the link checker (R6), re-verify a slice of `SOURCES.md` and add "last verified" dates, tag a snapshot (`git tag year-YYYY`), make the bundle (O5).
  **Done when:** the checklist is written down and the first review is done.
  *Progress 2026-10-07:* checklist written in `STEWARDS.md`. The first full review waits for the link checker (R6); the `year-2026` tag is made at that review.

- [ ] **O8. Domain (later).** Mike will choose one. Register for the longest term available; record the registrar and renewal date in the steward note.

---

## 2. Usefulness to a learner

The site describes a curriculum; these make it something a learner and a mentor can use day to day. Suggested order: L1, L2, L3, L4, L5, then L6–L8.

- [x] **L1. Tutor prompt pack.**
  The Curriculum promises an AI tutor but gives no way to summon one. Build plain-text prompts that work with any model, now or later:
  - a base Socratic prompt that encodes the seven rules in Curriculum VI (attempt first; ask more than tell; never write the work; verify everything; argue the other side; explain it back; the notebook stays by hand);
  - one prompt per stage (Α–Ζ), using its aim, how and machine's-role text;
  - one per sub-area, generated from its name, description, topics and reading list.
  Data in `js/data/prompts.js` (`C.prompts`), with a "Copy tutor prompt" button in each stage card and sub-area panel. Also exportable as a single printable text file.
  **Done when:** every stage and sub-area offers a prompt; it works offline; copying works on iPhone.

- [x] **L2. Search.**
  Client-side index over domains, sub-areas, topics, reading lists, stages and (later) the glossary. Opens with `/` and from the nav; results route to the right page and panel.
  **Done when:** instant results offline; usable at 360px; keyboard and screen-reader friendly.

- [ ] **L3. Glossary of Greek terms.**
  `C.glossary`: term, polytonic Greek, transliteration, meaning, and a checkable citation (e.g. *phronēsis*, *NE* VI.5). Start with the terms already in the copy: endoxa, aporiai, phronēsis, scholē, aretē, eudaimonia, peripatos, hetairoi, mousikē, oikonomia, historia, technē, theōria, praxis, poiēsis, organon. Add `lang="grc"` to Greek text across the site (today only the epigraph has it). Extend `check-data.js` to validate it.
  **Done when:** a glossary view exists, first uses in the copy link to it, and the checker passes.

- [ ] **L4. A starter path.**
  A concrete first twelve weeks for a young learner in Stage Α, and a shorter adult version, built from existing data (domains in focus, the day, the week's rhythm, reading). Printable.
  **Done when:** a parent can start on Monday without reading the whole site.

- [ ] **L5. Mentor's guide.**
  One page for whoever teaches next: running the day and the week, the symposium and field day, using the machine rules, the mentor hour, what to watch for at each stage.
  **Done when:** written, linked from the Curriculum, printable.

- [ ] **L6. Commonplace book.**
  The site preaches ὑπομνήματα and offers nowhere to keep them. Local-first notes (IndexedDB), tagged by domain and sub-area, with **Markdown export and import**. Several learners on one device (family profiles, named locally).
  Caution: Safari can clear a website's stored data after a period of disuse; the home-screen app is safer, but always offer export and remind people to use it. Check the current WebKit storage rules before building.
  **Done when:** notes survive reloads and offline use, export round-trips, and nothing leaves the device.

- [ ] **L7. Progress and proof of work.**
  Per-stage checklists from each stage's proof of work, plus a simple per-domain "where am I" mark. Same storage and export rules as L6, same family profiles.
  **Done when:** a learner can see what they have done and what is next, and export it.

- [ ] **L8. Recall cards.**
  A small spaced-repetition deck (Leitner boxes are enough) from the glossary, key dates and definitions. The curriculum says memory is built, not searched; this practises it.
  **Done when:** daily review works offline; the deck grows from data, not hand-entry.

---

## 3. Visual learning

**Principle: link out to the great labs; build only what is missing or must be ours.** Build in-house only small pieces that are tied to this curriculum, work offline, and run on an old iPad. That means SVG, Canvas or Web Audio with no libraries, a text equivalent for every visual, and `prefers-reduced-motion` respected. Interactive pieces may use the reserve palette from `CLAUDE.md`, starting with the pottery black and orange-red pair.

**Decision (before V1):** where built pieces live. Each with its subject (map in The Story, Euclid in the Geometry panel and Stage Β, monochord in Harmony), plus an index of all of them; or a dedicated Lab page.

- [ ] **V1. Lineage map** (The Story). The fourteen rooms on a map: Mieza, Athens, Alexandria, Jarrow, Baghdad, Bologna/Paris/Oxford, Florence, Rome, London, Birmingham, Copenhagen, Palo Alto, Hawthorne. Data-driven from the lineage. Base map from Natural Earth (public domain), simplified.
  **Done when:** tap a place to read its card; readable at 360px; has a text list equivalent.

- [ ] **V2. Deep-time timeline.** Big Bang to today on a zoomable log scale, with the lineage rooms and the big ideas plotted (`C.timeline` data). Serves Stage Α's "one story", History, and Cosmos.
  **Done when:** pinch and zoom work on iPad; the data validates; there is a list fallback.

- [ ] **V3. Euclid I.47, draggable.** Drag the right triangle and watch the squares' areas stay equal, then step through Euclid's own proof. Stage Β asks for twenty proofs; this shows what one feels like.
  **Done when:** works by touch and keyboard; the steps cite *Elements* I.47.

- [ ] **V4. Monochord.** Move a bridge along a string and hear the octave, fifth and fourth (2:1, 3:2, 4:3) with Web Audio. Ties Music to Mathematics (the harm–arith link).
  **Done when:** sound starts only on user action; the ratios are shown; usable without sound.

- [ ] **V5. World View poster.** Export the map, legend and index as a print-ready SVG/PDF (A1 and A2). A wall poster is both a teaching aid and a legacy object.
  **Done when:** it prints cleanly at A2 and the text is legible.

- [ ] **V6. Later candidates** (each only if no good external lab exists): the spiral as a radial diagram; a syllogism checker (Venn); a four-causes diagrammer. For scale (quark to galaxy) and the tree of life, link to *Scale of the Universe 2* and OneZoom (see R1) rather than rebuild.

---

## 4. Off-ramps and the library

Off-ramps stay **pointers, not a syllabus**: at most three per sub-area (94 sub-areas, 282 slots). Today there are three entries, all YouTube links with TODOs, which is the most fragile kind of source.

### R1. Research findings so far (2 October 2026)

**Rubric for any off-ramp:**
1. **Durable:** an institution, or a long-running independent creator.
2. **Free**, with no login or ads where possible.
3. **Light** enough to run on an old iPad; heavy pages are flagged.
4. **Open licence** where possible.
5. **Teaches**, rather than entertains.

**Interactive and 3D labs.** Weight: light = any device; medium = WebGL, test on an iPad; heavy = needs a fast GPU. "Verified" means checked on 2 October 2026; everything else is to evaluate.

| Lab | What | Weight | Licence | Fits (sub-area ids) | Status |
|---|---|---|---|---|---|
| [Bartosz Ciechanowski](https://ciechanow.ski/archives/) | Hand-built interactive essays, the gold standard: Mechanical Watch, Internal Combustion Engine, Gears, Bicycle, Airfoil, Naval Architecture, Sound, GPS, Cameras and Lenses, Lights and Shadows, Earth and Sun, Moon, Color Spaces, Curves and Surfaces, Tesseract, Floating Point | medium | © author (link only) | mechs, mech, acoust, fields, astro, geom, paint, hw | verified list |
| [PhET](https://phet.colorado.edu) | University of Colorado (since 2002) physics, chemistry, maths simulations in HTML5 | light | CC BY 4.0 | mech, fields, chem, nuclear, arith, prob | verified |
| [507 Mechanical Movements](https://507movements.com) | Henry Brown's 1868 book of mechanisms, animated | light | book PD; animations © | mechs | verified (a new 2026 animated version was reported; find and compare) |
| [Scale of the Universe 2](https://htwins.net/scale2/) | Quark to galaxy, zoom by powers of ten | light | © authors | astro, deep | verify it still runs (began as Flash) |
| [OneZoom](https://www.onezoom.org) | Zoomable tree of all known life, 2.2 million species; a London charity; touch-friendly | medium | free for education | tax, evo | verified |
| [Smithsonian 3D](https://3d.si.edu) | Scanned artefacts in the open-source Voyager viewer; much of it CC0 | medium | CC0 (many) | sculpt, arch, ideas, astro, mechs | verified |
| [Airsup Lab](https://www.airsup.ai/lab) ([source](https://github.com/AirsupHQ/airsup-lab)) | Take-apart machines: fusion reactor, Raptor engine, F1 car and more | **heavy** | MIT | energy, nuclear, mechs, sys | Builds every machine's geometry at page load, so it would not load on a 16 GB M2 Pro. Link only with a "heavy" flag; MIT means single machines could later be adapted in a lighter form |
| PC Anatomy (three.js forum) | Take apart a desktop PC in 3D | ? | ? | hw | evaluate |

**To evaluate** (likely good, unverified): Chrome Music Lab and musictheory.net (harm, compo); Seeing Theory, Brown University (prob); Falstad circuit simulator (elec, hw); GeoGebra, Euclidea, Desmos (geom, calc); Stellarium Web (astro); earth.nullschool.net and the Ancient Earth globe (earth, deep); Our World in Data (macro, ehist, eco, med); Constitute Project (const); Lichess (games); Kialo argument maps (dial, rhet); Nicky Case's explorable explanations (various).

**Primary texts and reference** (to evaluate): Perseus and the Scaife viewer, Logeion (Greek and Latin dictionaries), LacusCurtius, Wikisource, Project Gutenberg, **Standard Ebooks** (well-typeset public-domain editions, good for family reading), Internet Archive and Open Library, LibriVox (audiobooks), OpenStax (free textbooks), CORE Econ, MIT OpenCourseWare, CS50, Nand2Tetris, the Feynman Lectures online, MacTutor History of Mathematics, BBC *In Our Time* archive.

**Video creators** (to evaluate, choosing for durability and teaching): 3Blue1Brown, Numberphile, Mathologer, Veritasium, Branch Education, Jared Owen, Animagraffs, Practical Engineering, engineerguy (Bill Hammack), Smarthistory, Khan Academy, Crash Course, Fall of Civilizations, PBS Space Time.

**Encyclopaedias.** Wikipedia remains the automatic look-up. Add the Stanford Encyclopedia of Philosophy (and IEP) for philosophy, ethics and religion sub-areas, and MacTutor for the history of mathematics.
On **Grokipedia**: [PolitiFact (Nov 2025)](https://politifact.com/article/2025/nov/12/Grokipedia-Wikipedia-AI-citations/) found it less careful about sourcing and accuracy than Wikipedia, and a [study reported in May 2026](https://phys.org/news/2026-05-grokipedia-news-sources.html) found it draws more on less reliable and right-leaning news sources on topics including religion, history and literature. That sits badly with this project's rule that every claim must be checkable.
**Decided 2026-10-02:** not a default. Use Grokipedia only where Wikipedia has no article on the subject.

### Work items

- [ ] **R2. Schema for durability.** In `C.resources` add `weight` (light | medium | heavy, with "heavy" shown to the learner as needing a fast computer), `checked` (YYYY-MM), `archived` (a Wayback Machine snapshot URL) and an optional `licence`.
  **Decision:** add a `lab` type (shown as "Explore") for interactive simulations, or keep them under `tool`.
  Update `check-data.js` and the data rules in `CLAUDE.md` to match.
  **Done when:** the schema is documented and validated, and the renderer shows the weight flag.

- [ ] **R3. Free editions for every Classic.** Give each Classic-tier reading entry (and stage readings where the text is public domain) a link to a legitimately free edition (Perseus, Wikisource, Gutenberg, Standard Ebooks, Internet Archive, LibriVox), and choose the recommended translation. This closes the open `ROADMAP.md` reading-list item.
  **Done when:** every public-domain Classic opens in one tap; in-copyright translations are named, never linked to pirate copies.

- [ ] **R4. Curate off-ramps branch by branch.** Order: Organon (logic, lang, math, comp), then Theoria, Praxis, Poiesis. At most three per sub-area, judged by the rubric, with at least one non-video where possible. Resolve the three existing TODOs first (deep, linalg, calc: link the 3Blue1Brown playlists directly and identify the deep-time video's creator).
  **Done when:** each branch is done as its own commit, with a dated entry in the log.

- [ ] **R5. Encyclopaedia look-ups.** Implement the R1 decision: Wikipedia by default, SEP for the philosophy-leaning sub-areas, MacTutor where it fits.
  **Done when:** the panel offers the right look-up per sub-area.

- [ ] **R6. Link checker.** `scripts/check-links.js`, no dependencies. It checks every URL in the data, reports dead links and redirects, and can request a Wayback snapshot for each. It runs in the annual review (O7).
  **Done when:** it runs from the command line and writes a dated report.

---

## 5. Coverage (later)

The taxonomy is fine for now. The first addition will be the **domestic and practical arts**: cooking and food, textiles and clothing, repair and hand tools, growing food, first aid; money at home already sits under Economics.
**Decision (when the time comes):** a new domain under Poiesis (which makes 18 domains, so the ring, the spiral table and the counts in the copy all change), or new sub-areas within existing domains.
A new domain needs branch, Greek, description, an "In Aristotle" line, frontier, 5–6 sub-areas, a spiral row and a reading list, then `check-data.js`. Other candidates remain in `ROADMAP.md`.

## 6. Parked (not now)

- Self-hosting the fonts (removes the Google Fonts dependency). Accepted as is for now.
- A static, JS-free mirror of the site, which would double as a printable book. Revisit with V5.
- Accessibility pass and iPad tuning: still tracked in `ROADMAP.md` §1 and §2.

---

## Decisions log

- **2026-09-22** Correctness pass: fact-check done, sources in `SOURCES.md`; proofread; Greek checked.
- **2026-09-22** Lineage: fourteen rooms. Apple replaced by Xerox PARC; Bede's monastery placed before the House of Wisdom (chronology).
- **2026-09-22** Lyceum: "museum of specimens" dropped for the attested library, shrine to the Muses and maps.
- **2026-09-22** Time category renamed "Workshop & real tasks".
- **2026-09-22** Hosting: Cloudflare Worker, serving `dist/` only (`wrangler.jsonc`); web app with offline support.
- **2026-09-22** Greek pigment palette tried site-wide and not adopted (tag `palette-pigments`). Kept as a reserve palette for interactive assets.
- **2026-09-22** Curriculum split into The Story (I–II) and Curriculum (I–VII).
- **2026-09-22** Em dashes and marketing register removed; voice rules updated in `CLAUDE.md`.
- **2026-10-02** Font and JavaScript dependencies accepted for now. Domain to be chosen later. Open source goes first.
- **2026-10-02** O1: content under CC BY-SA 4.0 (`LICENSE-CONTENT`), code under MIT (`LICENSE`); the README lists which files fall under which, and anything unlisted counts as content.
- **2026-10-02** O2 (part): `mbattye@me.com` stays as the commit address in a public repo; no switch to the noreply address.
- **2026-10-02** R1/R5: Wikipedia is the default look-up; Grokipedia only where Wikipedia has no article.
- **2026-10-02** Footer carries a one-line licence note. O3: README rewritten for strangers and family (what it is, run, files, hosting, own copy, licences). GitHub forking only works once O4 makes the repo public; until then the clone and ZIP routes need access.
- **2026-10-06** O2 closed: `CLAUDE.md`, `ROADMAP.md`, `PLAN.md` and `SOURCES.md` confirmed fine to publish.
- **2026-10-06** O4 done: `mbattye/companions` made public with Mike’s go-ahead; description and homepage set. GitHub’s licence badge shows MIT (it reads `LICENSE` only); the README explains the split.
- **2026-10-07** L1: tutor prompts are templates in `C.prompts`, filled from the data, so a family editing the data gets matching prompts for free. Each copied prompt stands alone (base rules plus context). The tutor’s first move is to ask the learner’s name, age and what they know, so one prompt serves child and adult. Every prompt can be read on the page before copying. The printable export is a client-side `.txt` download from Curriculum VI: the base once, then each stage and sub-area. Copy falls back to a hidden textarea where the Clipboard API is unavailable (`file://`).
- **2026-10-07** L2: search is a modal `<dialog>` opened from a nav icon or `/`. The index is built in the browser at load from the data plus the page headings and the fourteen rooms, about 720 entries, so it needs no build step and works offline. Matching ignores case, accents and breathings; every word must match; titles and word starts rank first; 40 results at most. To fit the icon on phones the nav spacing tightens below 480px and the wordmark hides below 375px (the column mark stays). The glossary joins the index with L3.
- **2026-10-07** O5 (part): no mirror for now; the yearly archive is a bundle plus a ZIP (the ZIP so a non-developer can restore without git), kept in a git-ignored `archive/` folder and moved to family storage by hand. O6: `STEWARDS.md` names Mike as steward, successor to be named. O7: checklist written; first review pending R6.
