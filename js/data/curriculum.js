/* curriculum.js
 * The seven stages, time-mix categories, the spiral depth table and the structure/curiosity spectrum.
 * Plain script (not a module) so index.html also works when opened straight from disk.
 */
window.C = window.C || {};

C.mixCategories = [
  {
    "k": "study",
    "n": "Study",
    "c": "var(--q-org)"
  },
  {
    "k": "make",
    "n": "Making & real tasks",
    "c": "var(--q-poi)"
  },
  {
    "k": "dial",
    "n": "Dialectic with peers",
    "c": "var(--q-pra)"
  },
  {
    "k": "play",
    "n": "Body & play",
    "c": "var(--q-the)"
  },
  {
    "k": "free",
    "n": "Solitude & free reading",
    "c": "var(--stone)"
  }
];

C.stages = [
  {
    "numeral": "Α",
    "name": "Wonder",
    "greek": "Θαῦμα",
    "span": "Ages 5–10 · An adult’s first month",
    "aim": "Begin with what is nearest to us: stories, creatures, stars and the work of the hands.",
    "domains": [
      "hist",
      "lett",
      "life",
      "mus",
      "art",
      "body"
    ],
    "what": "Big History as one story, Big Bang to today. Myths and Homer read aloud. Nature walks and collecting: plants, rocks, birds. Drawing from life. Singing and a first instrument. Counting games and puzzles. Building with wood and clay.",
    "how": "Questions before answers. A “why” notebook. Show-and-tell, play and free exploration. Aristotle: no lessons before five, then two years of watching before doing.",
    "ai": "An oracle that answers back with a question. It pitches answers to the child’s level and never makes the drawing or tells the story for them.",
    "proof": "A cabinet of curiosities: a hundred specimens collected, drawn, named and explained.",
    "mix": {
      "study": 20,
      "make": 20,
      "dial": 10,
      "play": 35,
      "free": 15
    },
    "reading": [
      {
        "title": "Black Ships Before Troy",
        "author": "Rosemary Sutcliff"
      },
      {
        "title": "D’Aulaires’ Book of Greek Myths",
        "author": "Ingri & Edgar Parin d’Aulaire"
      },
      {
        "title": "Aesop’s Fables"
      },
      {
        "title": "A Little History of the World",
        "author": "E. H. Gombrich"
      },
      {
        "title": "The Way Things Work",
        "author": "David Macaulay"
      }
    ]
  },
  {
    "numeral": "Β",
    "name": "Instruments",
    "greek": "Ὄργανον",
    "span": "Ages 10–14 · Three to six months",
    "aim": "Master the tools every other subject needs: word, number, argument and code.",
    "domains": [
      "lang",
      "math",
      "logic",
      "comp",
      "hist"
    ],
    "what": "Grammar and daily writing. A second language, plus Greek and Latin roots. Arithmetic to algebra. Euclid Book I by compass and straightedge. Fallacies and the syllogism. A first programming language. A wall timeline of history, filled in as you learn.",
    "how": "Drill and proof together. Formal debate begins. Commonplace book kept daily. Peers teach the year below.",
    "ai": "A patient drill partner that sets problems at the edge of ability, asks “where exactly did it go wrong?” and grades explanations as well as answers.",
    "proof": "Prove twenty propositions of Euclid at a board, write and defend a 1,000-word argument, and ship a small program someone uses.",
    "mix": {
      "study": 40,
      "make": 15,
      "dial": 15,
      "play": 20,
      "free": 10
    },
    "reading": [
      {
        "title": "Elements, Book I",
        "author": "Euclid"
      },
      {
        "title": "How to Solve It",
        "author": "George Pólya"
      },
      {
        "title": "On Writing Well",
        "author": "William Zinsser"
      },
      {
        "title": "The Art of Logic",
        "author": "Eugenia Cheng"
      },
      {
        "title": "Code",
        "author": "Charles Petzold"
      }
    ]
  },
  {
    "numeral": "Γ",
    "name": "Nature",
    "greek": "Φυσική",
    "span": "Ages 13–16 · Six months",
    "aim": "Know how the natural world works by observing, measuring and testing.",
    "domains": [
      "phys",
      "life",
      "math",
      "hist"
    ],
    "what": "Mechanics, energy, light and electricity. Chemistry. Taxonomy, evolution and ecology. Earth, sky and climate. The human body. Throughout, the history of science: who found out, and how.",
    "how": "Laboratory and field before textbook. Replicate the classics: Eratosthenes’ shadows, Galileo’s ramp, Mendel’s crosses. Keep a lab book.",
    "ai": "A lab assistant for designing experiments, analysing error and running simulations. It never supplies data the student did not measure.",
    "proof": "An original field study or experiment, written as a paper and presented to the cohort.",
    "mix": {
      "study": 35,
      "make": 20,
      "dial": 15,
      "play": 18,
      "free": 12
    },
    "reading": [
      {
        "title": "The Lagoon",
        "author": "Armand Marie Leroi"
      },
      {
        "title": "The Voyage of the Beagle",
        "author": "Charles Darwin"
      },
      {
        "title": "Six Easy Pieces",
        "author": "Richard Feynman"
      },
      {
        "title": "Cosmos",
        "author": "Carl Sagan"
      },
      {
        "title": "The Disappearing Spoon",
        "author": "Sam Kean"
      }
    ]
  },
  {
    "numeral": "Δ",
    "name": "Making",
    "greek": "Τέχνη",
    "span": "Ages 15–18 · Six to twelve months",
    "aim": "Turn knowledge into things that work. The bottega and the machine shop.",
    "domains": [
      "eng",
      "comp",
      "art",
      "mus",
      "econ"
    ],
    "what": "Mechanisms, materials, electronics and manufacture. Hardware, software and AI systems. Technical drawing, architecture and design. Music and art as crafts with standards.",
    "how": "Apprenticeship to a master. Projects with real users. Build, test, fail, fix. Design crits where work is judged in front of peers.",
    "ai": "A co-pilot for code and CAD, on one condition: the student can explain every line. It also acts as a hostile reviewer that hunts for failure modes.",
    "proof": "Ship a real thing that strangers use: a machine, an app, a building project or a performance.",
    "mix": {
      "study": 20,
      "make": 45,
      "dial": 12,
      "play": 13,
      "free": 10
    },
    "reading": [
      {
        "title": "Notebooks",
        "author": "Leonardo da Vinci"
      },
      {
        "title": "Structures",
        "author": "J. E. Gordon"
      },
      {
        "title": "The Design of Everyday Things",
        "author": "Don Norman"
      },
      {
        "title": "The Soul of a New Machine",
        "author": "Tracy Kidder"
      },
      {
        "title": "Liftoff",
        "author": "Eric Berger"
      }
    ]
  },
  {
    "numeral": "Ε",
    "name": "Causes",
    "greek": "Θεωρία",
    "span": "Ages 17–21 · A year",
    "aim": "Ask why: the four causes, the deep structure, and history as argument.",
    "domains": [
      "phil",
      "hist",
      "phys",
      "math",
      "lett",
      "comp",
      "rel"
    ],
    "what": "Metaphysics, epistemology, mind and philosophy of science. History analysed: causes of wars, rise and fall of states. Advanced mathematics and physics. Tragedy and the novel. AI and the question of mind.",
    "how": "The Lyceum rhythm: morning lecture, afternoon walk, evening seminar. Primary texts, not summaries. Formal disputation.",
    "ai": "A sparring partner that takes the opposing side at full strength, and a research assistant that must cite every claim.",
    "proof": "A thesis defended in public disputation before companions and outsiders.",
    "mix": {
      "study": 40,
      "make": 15,
      "dial": 22,
      "play": 12,
      "free": 11
    },
    "reading": [
      {
        "title": "Five Dialogues",
        "author": "Plato"
      },
      {
        "title": "Metaphysics I & XII; Physics II",
        "author": "Aristotle"
      },
      {
        "title": "History of the Peloponnesian War",
        "author": "Thucydides"
      },
      {
        "title": "The Structure of Scientific Revolutions",
        "author": "Thomas Kuhn"
      },
      {
        "title": "The Guide for the Perplexed",
        "author": "Maimonides"
      }
    ]
  },
  {
    "numeral": "Ϛ",
    "name": "Practical wisdom",
    "greek": "Φρόνησις",
    "span": "Ages 20+ · Two years",
    "aim": "Act well for yourself, a firm and a city. This needs experience, so the stage is built on real responsibility.",
    "domains": [
      "eth",
      "pol",
      "econ",
      "lang",
      "body"
    ],
    "what": "Ethics and character. Politics, law and the international order. Economics, enterprise and leadership. Rhetoric used in earnest.",
    "how": "Case studies, a real venture or public-service placement, one named owner for each outcome, a mentor and a decision journal.",
    "ai": "A simulator of stakeholders, markets and adversaries for war-gaming decisions, and an auditor of your decision journal.",
    "proof": "Found, run or rescue something real, then give a public account of it.",
    "mix": {
      "study": 20,
      "make": 35,
      "dial": 25,
      "play": 10,
      "free": 10
    },
    "reading": [
      {
        "title": "Nicomachean Ethics",
        "author": "Aristotle"
      },
      {
        "title": "Politics",
        "author": "Aristotle"
      },
      {
        "title": "Meditations",
        "author": "Marcus Aurelius"
      },
      {
        "title": "Parallel Lives",
        "author": "Plutarch"
      },
      {
        "title": "High Output Management",
        "author": "Andrew Grove"
      }
    ]
  },
  {
    "numeral": "Ζ",
    "name": "The return",
    "greek": "Σχολή",
    "span": "Lifelong",
    "aim": "Leisure in the Greek sense: free, serious study for its own sake, and teaching others.",
    "domains": [
      "phil",
      "lett",
      "mus",
      "art",
      "hist",
      "rel"
    ],
    "what": "Return to any domain at greater depth. Mastery in one, fluency in many. The great conversation, joined as a participant.",
    "how": "Teach a younger cohort. Host the symposium. Write, travel, build and keep the notebook.",
    "ai": "An archivist of a lifetime’s notes, and a student to teach.",
    "proof": "Teach a cohort through Stage Α, and write your own World View.",
    "mix": {
      "study": 20,
      "make": 30,
      "dial": 25,
      "play": 10,
      "free": 15
    },
    "reading": [
      {
        "title": "Essays",
        "author": "Montaigne"
      },
      {
        "title": "The Consolation of Philosophy",
        "author": "Boethius"
      },
      {
        "title": "Philosophy as a Way of Life",
        "author": "Pierre Hadot"
      },
      {
        "title": "The Divine Comedy",
        "author": "Dante"
      },
      {
        "title": "War and Peace",
        "author": "Leo Tolstoy"
      }
    ]
  }
];

/* Depth of each domain at each stage: 0 absent, 1 touched, 2 substantial, 3 central. */
C.spiral = {
  "logic": [1, 3, 2, 1, 3, 2, 2],
  "lang": [2, 3, 1, 1, 2, 3, 3],
  "math": [1, 3, 3, 2, 2, 1, 2],
  "comp": [1, 2, 2, 3, 2, 2, 2],
  "phil": [1, 1, 1, 1, 3, 2, 3],
  "phys": [2, 1, 3, 2, 2, 1, 2],
  "life": [3, 1, 3, 1, 2, 1, 2],
  "hist": [3, 2, 2, 1, 3, 2, 3],
  "eth": [1, 1, 1, 1, 2, 3, 3],
  "pol": [0, 1, 1, 1, 2, 3, 3],
  "econ": [0, 1, 1, 2, 1, 3, 2],
  "body": [3, 2, 2, 2, 2, 2, 2],
  "lett": [3, 2, 1, 1, 2, 2, 3],
  "mus": [3, 2, 2, 2, 1, 1, 2],
  "art": [3, 1, 1, 3, 1, 1, 2],
  "eng": [2, 1, 2, 3, 1, 2, 2],
  "rel": [2, 1, 1, 1, 3, 2, 3]
};

/* [name, context, position 0 (rigid) to 100 (open), isOurs] */
C.spectrum = [
  ["Spartan agoge","Sparta, from c. 7th c. BC",6],
  ["Macedonian royal pages","Philip’s court",24],
  ["Verrocchio’s bottega","Florence, c. 1470",34],
  ["Apple","2000s",40],
  ["Mieza","343 BC",50],
  ["Companions","This curriculum",52,true],
  ["SpaceX","2010s–20s",56],
  ["The Lyceum","335 BC",62],
  ["The Lunar Society","c. 1765",86]
];
