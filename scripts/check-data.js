/* check-data.js
 * Validates js/data/*.js against the data rules in CLAUDE.md. No dependencies.
 * Run: node scripts/check-data.js   (exits 1 if any error is found)
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const files = ["domains", "curriculum", "reading", "resources", "prompts", "glossary", "starter"];
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of files) {
  const src = fs.readFileSync(path.join(root, "js/data", f + ".js"), "utf8");
  vm.runInContext(src.replace(/^window\.C = window\.C \|\| \{\};/m, "var C = window.C = window.C || {};"), ctx, { filename: f + ".js" });
}
const C = ctx.window.C;

const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);

/* ---------- domains and sub-areas ---------- */
const TIERS = ["Begin", "Classic", "Deeper"];
const RTYPES = ["video", "article", "course", "puzzle", "tool"];
const domIds = new Set(), subIds = new Map();

for (const d of C.domains) {
  if (domIds.has(d.id)) err(`duplicate domain id "${d.id}"`);
  domIds.add(d.id);
  if (!/^[a-z]+$/.test(d.id)) err(`domain id "${d.id}" is not short lowercase`);
  if (!C.branches[d.branch]) err(`${d.id}: unknown branch "${d.branch}"`);
  for (const k of ["name", "short", "greek", "desc", "aristotle", "frontier"]) if (!d[k]) err(`${d.id}: missing ${k}`);
  if (!Array.isArray(d.subs) || d.subs.length < 5 || d.subs.length > 6) err(`${d.id}: has ${d.subs ? d.subs.length : 0} subs (need 5–6)`);
  for (const s of d.subs || []) {
    if (subIds.has(s.id)) err(`duplicate sub id "${s.id}" (${subIds.get(s.id)} and ${d.id})`);
    subIds.set(s.id, d.id);
    if (!/^[a-z]+$/.test(s.id)) err(`sub id "${s.id}" is not short lowercase`);
    for (const k of ["name", "desc"]) if (!s[k]) err(`${d.id}/${s.id}: missing ${k}`);
    if (!Array.isArray(s.topics) || !s.topics.length) err(`${d.id}/${s.id}: no topics`);
  }
}

/* ---------- links ---------- */
const pairs = new Set();
C.links.forEach(({ a, b, why }, i) => {
  if (!subIds.has(a)) err(`link #${i}: "${a}" is not a sub id`);
  if (!subIds.has(b)) err(`link #${i}: "${b}" is not a sub id`);
  if (a === b) err(`link #${i}: links "${a}" to itself`);
  const k = [a, b].sort().join("|");
  if (pairs.has(k)) err(`link #${i}: duplicate pair ${a}–${b}`);
  pairs.add(k);
  if (!why) err(`link #${i} (${a}–${b}): missing why`);
});
for (const id of subIds.keys()) if (!C.links.some(l => l.a === id || l.b === id)) warn(`sub "${id}" has no links`);

/* ---------- stages, mix, spiral ---------- */
const mixKeys = C.mixCategories.map(m => m.k);
C.stages.forEach((s, i) => {
  for (const id of s.domains) if (!domIds.has(id)) err(`stage ${s.numeral}: unknown domain "${id}"`);
  for (const f of ["name", "aim", "what", "how", "ai", "proof", "watch"]) if (!s[f]) err(`stage ${s.numeral}: missing ${f}`);
  const keys = Object.keys(s.mix);
  if (keys.length !== mixKeys.length || !mixKeys.every(k => k in s.mix)) err(`stage ${s.numeral}: mix keys ${keys} ≠ ${mixKeys}`);
  const sum = Object.values(s.mix).reduce((a, b) => a + b, 0);
  if (sum !== 100) err(`stage ${s.numeral}: mix sums to ${sum}`);
});
for (const id of domIds) if (!C.spiral[id]) err(`domain "${id}" has no C.spiral row`);
for (const [id, row] of Object.entries(C.spiral)) {
  if (!domIds.has(id)) err(`C.spiral key "${id}" is not a domain`);
  if (row.length !== C.stages.length) err(`C.spiral.${id}: ${row.length} values, ${C.stages.length} stages`);
  if (row.some(v => ![0, 1, 2, 3].includes(v))) err(`C.spiral.${id}: values must be 0–3`);
}
C.stages.forEach((s, j) => {
  for (const id of s.domains) if (C.spiral[id] && C.spiral[id][j] < 2) warn(`stage ${s.numeral} focuses "${id}" but spiral depth is ${C.spiral[id][j]}`);
  for (const [id, row] of Object.entries(C.spiral)) if (row[j] === 3 && !s.domains.includes(id)) warn(`"${id}" is central (3) at stage ${s.numeral} but not in its domains in focus`);
});

/* ---------- reading ---------- */
for (const id of domIds) if (!C.reading[id] || !C.reading[id].length) err(`domain "${id}" has no C.reading list`);
for (const [id, list] of Object.entries(C.reading)) {
  if (!domIds.has(id)) err(`C.reading key "${id}" is not a domain`);
  list.forEach((r, i) => {
    if (!TIERS.includes(r.tier)) err(`C.reading.${id}[${i}]: bad tier "${r.tier}"`);
    if (!r.title) err(`C.reading.${id}[${i}]: missing title`);
  });
}

/* ---------- resources ---------- */
for (const [id, list] of Object.entries(C.resources || {})) {
  if (!subIds.has(id)) err(`C.resources key "${id}" is not a sub id`);
  if (list.length > 3) err(`C.resources.${id}: ${list.length} entries (max 3)`);
  list.forEach((r, i) => {
    if (!RTYPES.includes(r.type)) err(`C.resources.${id}[${i}]: bad type "${r.type}"`);
    if (!r.title) err(`C.resources.${id}[${i}]: missing title`);
    if (!/^https:\/\//.test(r.url || "")) err(`C.resources.${id}[${i}]: url must be https`);
    if (!r.by) warn(`C.resources.${id}[${i}]: empty "by"`);
    if (/TODO/i.test(r.note || "")) warn(`C.resources.${id}[${i}]: ${r.note}`);
  });
}

/* ---------- tutor prompts ---------- */
const SLOTS = {
  base: [],
  stage: ["numeral", "name", "greek", "span", "aim", "what", "how", "ai", "proof", "domains", "reading"],
  sub: ["name", "desc", "domain", "branch", "topics", "aristotle", "frontier", "links", "reading"]
};
for (const [k, slots] of Object.entries(SLOTS)) {
  const lines = (C.prompts || {})[k];
  if (!Array.isArray(lines) || !lines.every(l => typeof l === "string")) { err(`C.prompts.${k}: must be an array of strings`); continue; }
  for (const [, slot] of lines.join("\n").matchAll(/\{(\w+)\}/g)) if (!slots.includes(slot)) err(`C.prompts.${k}: unknown placeholder {${slot}}`);
}
const rules = ((C.prompts || {}).base || []).filter(l => /^\d\. /.test(l)).length;
if (rules !== 7) err(`C.prompts.base: ${rules} numbered rules (expected the seven in Curriculum VI)`);

/* ---------- glossary ---------- */
const gIds = new Set();
(C.glossary || []).forEach((g, i) => {
  const at = `C.glossary[${i}]${g.id ? " (" + g.id + ")" : ""}`;
  if (!/^[a-z]+$/.test(g.id || "")) err(`${at}: id must be lowercase letters`);
  if (gIds.has(g.id)) err(`${at}: duplicate id`); gIds.add(g.id);
  for (const k of ["term", "greek", "meaning", "note", "cite"]) if (!g[k]) err(`${at}: missing ${k}`);
  if (g.greek && !/^[\u0370-\u03FF\u1F00-\u1FFF ]+$/.test(g.greek)) err(`${at}: greek must be Greek letters only`);
  if (g.term && g.term.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase() !== g.id) warn(`${at}: id is not the term without diacritics`);
  if (g.cite && !/\d/.test(g.cite) && !/preface/i.test(g.cite)) err(`${at}: cite needs a book, section or line reference`);
});

/* ---------- starter path ---------- */
for (const [k, n] of [["child", 12], ["adult", 4]]) {
  const P = (C.starter || {})[k], at = `C.starter.${k}`;
  if (!P) { err(`${at}: missing`); continue; }
  for (const f of ["title", "who", "kit"]) if (!P[f]) err(`${at}: missing ${f}`);
  if (!(P.tracks || []).length) err(`${at}: no tracks`);
  (P.tracks || []).forEach((t, i) => (t.rhythm || []).forEach((row, j) => { if (!Array.isArray(row) || row.length !== 2 || !row[0] || !row[1]) err(`${at}.tracks[${i}].rhythm[${j}]: must be [when, what]`); }));
  if ((P.weeks || []).length !== n) err(`${at}: ${(P.weeks || []).length} weeks (expected ${n})`);
  let last = 0;
  (P.weeks || []).forEach((w, i) => {
    for (const f of ["title", "sub", "read", "make", "field", "ask"]) if (!w[f]) err(`${at}.weeks[${i}]: missing ${f}`);
    if (w.sub && !subIds.has(w.sub)) err(`${at}.weeks[${i}]: sub "${w.sub}" is not a sub id`);
    if (!(w.cabinet >= last)) err(`${at}.weeks[${i}]: cabinet count must not fall`); last = w.cabinet;
  });
}

/* ---------- strings: markup and typography ---------- */
const walk = (v, where) => {
  if (typeof v === "string") {
    const tags = v.match(/<\/?([a-z0-9]+)[^>]*>/gi) || [];
    for (const t of tags) if (!/^<\/?em>$/.test(t)) err(`${where}: disallowed markup ${t}`);
    const text = v.replace(/<[^>]+>/g, "");
    if (/['"]/.test(text)) err(`${where}: straight quote in "${text}"`);
    if (/ - /.test(text)) warn(`${where}: spaced hyphen (dash?) in "${text}"`);
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${where}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (!["url", "c"].includes(k)) walk(x, `${where}.${k}`);
};
for (const k of ["branches", "domains", "links", "stages", "mixCategories", "spectrum", "reading", "resources", "prompts", "glossary", "starter"]) walk(C[k], "C." + k);

/* ---------- report ---------- */
warnings.forEach(w => console.log("warn  " + w));
errors.forEach(e => console.log("ERROR " + e));
console.log(`${C.domains.length} domains, ${subIds.size} sub-areas, ${C.links.length} links, ${C.stages.length} stages, ${(C.glossary || []).length} terms · ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
