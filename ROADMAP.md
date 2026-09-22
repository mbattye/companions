# Roadmap

## 1. Correctness pass: style, formatting, grammar, content

- [x] **Fact-check every historical and textual claim** and add a source note for each. Done in `SOURCES.md` (September 2026); three items marked **?** await a decision. Priority list:
  - Mieza: dates (c. 343–340 BC), Aristotle's age (~41), Alexander 13, stone seats and shady walks (Plutarch, *Alexander* 7), the casket *Iliad* and dagger (*Alexander* 8, 26), "life … the good life" (*Alexander* 8), medicine (*Alexander* 8).
  - Aristotle: *Metaphysics* I.1 980a21 and I.2 982b12; *Physics* I.1 (knowable to us / by nature); *NE* I.3 and VI.8 (the young and practical wisdom); *NE* I.6 (truth above friends); *Politics* VII.17 (no lessons before five); *Politics* VIII.3 (four branches); *Metaphysics* VI.1 (theology).
  - Lyceum lecture pattern (Aulus Gellius), 158 constitutions, *peripatos* etymology.
  - Verrocchio/Leonardo dates; Lunar Society (founding c. 1765, full-moon Mondays, members); Falcon 1 fourth flight (28 Sept 2008); Bloom's 2 sigma (1984); Seneca *Ep.* 7.8.
- [ ] **Verify every reading-list entry**: exact title, author, recommended translation; remove anything doubtful. Titles and authors checked (all real, correctly attributed); recommended translations for the classics still to choose.
- [x] Proofread all copy for British spelling, punctuation, curly quotes, consistent capitalisation and tense.
- [x] Check all polytonic Greek (accents, breathings, iota subscripts). All correct; all-caps ΕΤΑΙΡΟΙ now drops its breathing.
- [ ] Review the domain and sub-area taxonomy for gaps and overlaps (the Religion omission shows why this matters). Candidates to consider: geography/cartography, psychology as its own home, agriculture/food, law vs. politics split, media/journalism.
- [ ] Accessibility: contrast in both themes (WCAG AA), keyboard traversal of the map, screen-reader labels, focus order.

Run `node scripts/check-data.js` after any data edit: it checks ids, links, spiral and reading keys, mixes, off-ramp limits, markup and straight quotes.

## 2. Distribution: web first, then iPhone and iPad

1. **Host the site.** GitHub repo → GitHub Pages, Cloudflare Pages or Vercel. Add a domain.
2. **Make it a PWA** (the cheapest path to "an app"): `manifest.webmanifest`, icons (including Apple touch icons), theme colours, a service worker for offline use, safe-area handling. It installs to the iPhone/iPad home screen via Share → Add to Home Screen.
3. **Tune for iPad and iPhone.** Test 390/430 (phones), 820/1024/1180/1366 (iPads, both orientations). Replace hover-only affordances with tap equivalents; larger hit targets on the map; consider a split view on iPad landscape.
4. **App Store (optional, later).** Wrap with Capacitor (keeps this codebase) and build in Xcode; needs an Apple Developer account. Apple rejects apps that are "just a website", so add app-grade value first: offline, progress tracking, a notebook, notifications for the weekly rhythm. Go native in SwiftUI only if a native experience becomes the point.

## 3. Off-ramps: external content, sparingly

- [x] Schema and rendering (`js/data/resources.js`; shows under "Off-ramps" in a sub-area panel, plus an automatic Wikipedia search link).
- [ ] Curate up to 3 per sub-area. Types: video (for example 3Blue1Brown for mathematics), article or encyclopaedia, course (for example MIT OpenCourseWare), puzzle (for example Project Euler, Lichess puzzles, Euclidea), tool.
- [ ] Decide on the encyclopaedia source(s): Wikipedia is the default; the Stanford Encyclopedia of Philosophy for philosophy entries; decide whether to offer Grokipedia as an alternative.
- [ ] Link-checker script (reports dead URLs) to run before each release.
- [ ] Confirm TODOs in `resources.js` (titles and playlist URLs).

## Later ideas

- Progress tracking per student (local first, sync later), a personal commonplace book, cohort features, stage "proof of work" submissions.
- Printable/exportable curriculum (PDF).
