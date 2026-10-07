/* glossary.js
 * Greek terms used in the copy. id: short and unique (the transliteration without macrons); term: transliteration;
 * greek: polytonic; meaning: a short gloss; note: one or two sentences on the idea and why it matters here;
 * cite: where to check it (work, book or section, Bekker or standard reference). Inline HTML is limited to <em>.
 * Plain script (not a module) so index.html also works when opened straight from disk.
 */
window.C = window.C || {};

C.glossary = [
  {
    "id": "aporiai",
    "term": "aporiai",
    "greek": "ἀπορίαι",
    "meaning": "Puzzles; impasses (singular <em>aporia</em>)",
    "note": "Literally “no way through”. Aristotle begins an inquiry by setting out the difficulties, because you cannot untie a knot you have not seen.",
    "cite": "<em>Metaphysics</em> III.1, 995a24–b4; <em>Nicomachean Ethics</em> VII.1, 1145b2–7"
  },
  {
    "id": "arete",
    "term": "aretē",
    "greek": "ἀρετή",
    "meaning": "Excellence; virtue",
    "note": "In Homer the excellence of anything, horses included. In Aristotle’s ethics a settled state of character, chosen, that hits the mean between too much and too little.",
    "cite": "Homer, <em>Iliad</em> 23.276; <em>Nicomachean Ethics</em> II.6, 1106b36–1107a2"
  },
  {
    "id": "endoxa",
    "term": "endoxa",
    "greek": "ἔνδοξα",
    "meaning": "Reputable opinions",
    "note": "What seems true to everyone, or to most people, or to the wise. Aristotle’s method starts from them, tests them against the puzzles and keeps what survives.",
    "cite": "<em>Topics</em> I.1, 100b21–23; <em>Nicomachean Ethics</em> VII.1, 1145b2–7"
  },
  {
    "id": "eudaimonia",
    "term": "eudaimonia",
    "greek": "εὐδαιμονία",
    "meaning": "Flourishing; happiness",
    "note": "Not a feeling but a life: the activity of the soul in accordance with excellence, over a complete life. The end that every other good serves.",
    "cite": "<em>Nicomachean Ethics</em> I.7, 1097b1–1098a20"
  },
  {
    "id": "hetairoi",
    "term": "hetairoi",
    "greek": "ἑταῖροι",
    "meaning": "Companions",
    "note": "The Macedonian king’s Companions, his closest circle in council and in war. Several of Alexander’s boyhood friends became Companions, which gives this project its name.",
    "cite": "Arrian, <em>Anabasis</em> 3.6.5; Plutarch, <em>Alexander</em> 10.5"
  },
  {
    "id": "historia",
    "term": "historia",
    "greek": "ἱστορία",
    "meaning": "Inquiry",
    "note": "Herodotus called his work a setting out of his <em>historia</em>. Aristotle used the same word for his studies of animals, so it covers nature as well as the human past.",
    "cite": "Herodotus, <em>Histories</em> I, preface; Aristotle, <em>History of Animals</em> (<em>Historia animalium</em>)"
  },
  {
    "id": "mousike",
    "term": "mousikē",
    "greek": "μουσική",
    "meaning": "The art of the Muses: music, with poetry and dance",
    "note": "One of the four customary subjects Aristotle names for the young, with letters, gymnastics and drawing. He asks whether it serves play, character or leisure, and answers all three.",
    "cite": "<em>Politics</em> VIII.3, 1337b23–27; VIII.5"
  },
  {
    "id": "oikonomia",
    "term": "oikonomia",
    "greek": "οἰκονομία",
    "meaning": "Household management",
    "note": "The running of an <em>oikos</em>, a household and its land. The root of “economics”, which began as the study of keeping a home, not a nation.",
    "cite": "<em>Politics</em> I.3, 1253b1–14"
  },
  {
    "id": "organon",
    "term": "organon",
    "greek": "ὄργανον",
    "meaning": "Instrument; tool",
    "note": "Aristotle uses it for tools of every kind, living and lifeless. Later Peripatetics gave the name to his logical works, as the instrument of all knowledge rather than a part of it.",
    "cite": "<em>Politics</em> I.4, 1253b27–33; the logical works: <em>Categories</em> to <em>Sophistical Refutations</em>"
  },
  {
    "id": "peripatos",
    "term": "peripatos",
    "greek": "περίπατος",
    "meaning": "A walk; a covered walkway",
    "note": "The Lyceum’s covered walk gave Aristotle’s school its name, the Peripatetics. Diogenes Laertius says the name came from his teaching while walking; most scholars derive it from the place.",
    "cite": "Diogenes Laertius, <em>Lives of the Philosophers</em> V.2"
  },
  {
    "id": "phronesis",
    "term": "phronēsis",
    "greek": "φρόνησις",
    "meaning": "Practical wisdom",
    "note": "A true, reasoned capacity to act well about what is good for human beings. It needs experience of particulars, which is why the young can be good mathematicians but not yet practically wise.",
    "cite": "<em>Nicomachean Ethics</em> VI.5, 1140a24–b30; VI.8, 1142a11–20"
  },
  {
    "id": "poiesis",
    "term": "poiēsis",
    "greek": "ποίησις",
    "meaning": "Making; production",
    "note": "Activity whose end is a thing beyond itself: a house, a poem, a bridge. One of Aristotle’s three kinds of knowledge, with knowing and acting.",
    "cite": "<em>Nicomachean Ethics</em> VI.4, 1140a1–23; <em>Metaphysics</em> VI.1, 1025b18–28"
  },
  {
    "id": "praxis",
    "term": "praxis",
    "greek": "πρᾶξις",
    "meaning": "Action; doing",
    "note": "Activity that is its own end: acting well is the point of acting. The domain of ethics and politics, where the measure is the person of practical wisdom.",
    "cite": "<em>Nicomachean Ethics</em> VI.4, 1140a1–6; VI.5, 1140b6–7"
  },
  {
    "id": "schole",
    "term": "scholē",
    "greek": "σχολή",
    "meaning": "Leisure",
    "note": "Time free from necessity, to be used well. Aristotle calls it the first principle of all action; through Latin <em>schola</em> it gave us “school”.",
    "cite": "<em>Politics</em> VIII.3, 1337b28–1338a13; <em>Nicomachean Ethics</em> X.7, 1177b4–6"
  },
  {
    "id": "techne",
    "term": "technē",
    "greek": "τέχνη",
    "meaning": "Craft; art",
    "note": "A state of making that follows a true account: knowing how, and being able to say why. The root of “technique” and “technology”.",
    "cite": "<em>Nicomachean Ethics</em> VI.4, 1140a1–23"
  },
  {
    "id": "thauma",
    "term": "thauma",
    "greek": "θαῦμα",
    "meaning": "Wonder",
    "note": "Where philosophy begins, now and at first: puzzlement at what is near at hand, then at greater things. Stage Α is named for it.",
    "cite": "<em>Metaphysics</em> I.2, 982b12–17"
  },
  {
    "id": "theoria",
    "term": "theōria",
    "greek": "θεωρία",
    "meaning": "Contemplation; study for its own sake",
    "note": "Looking at what is true for no further end. Aristotle ranks it as the highest and most continuous activity, and the most complete happiness.",
    "cite": "<em>Nicomachean Ethics</em> X.7, 1177a12–b4"
  }
];
