/* domains.js
 * Aristotle’s four branches, the 17 domains, their sub-areas, and the cross-links between sub-areas.
 * Plain script (not a module) so index.html also works when opened straight from disk.
 */
window.C = window.C || {};

C.branches = {
  "org": {
    "gr": "Ὄργανον",
    "en": "Instruments",
    "note": "Tools of thought",
    "c": "var(--q-org)"
  },
  "the": {
    "gr": "Θεωρία",
    "en": "Knowing",
    "note": "Studied for its own sake",
    "c": "var(--q-the)"
  },
  "pra": {
    "gr": "Πρᾶξις",
    "en": "Acting",
    "note": "How to live and rule well",
    "c": "var(--q-pra)"
  },
  "poi": {
    "gr": "Ποίησις",
    "en": "Making",
    "note": "The productive arts",
    "c": "var(--q-poi)"
  }
};

C.domains = [
  {
    "id": "logic",
    "branch": "org",
    "name": "Logic & Reasoning",
    "short": "Logic",
    "greek": "Ἀναλυτικά",
    "desc": "The rules of valid thought: how to move from what you know to what follows, and how to see where an argument breaks.",
    "aristotle": "Prior & Posterior Analytics, Topics, Sophistical Refutations: the Organon",
    "frontier": "Formal verification, causal inference, argument mapping",
    "subs": [
      {
        "id": "syll",
        "name": "Deductive logic",
        "desc": "From the syllogism to the proof: conclusions that cannot be false if the premises are true.",
        "topics": [
          "Aristotelian syllogistic",
          "Propositional & predicate logic",
          "Proof techniques",
          "Gödel’s incompleteness"
        ]
      },
      {
        "id": "induc",
        "name": "Induction & evidence",
        "desc": "Reasoning from cases to rules, and knowing how far to trust it.",
        "topics": [
          "Bacon’s method",
          "Hume’s problem",
          "Bayesian updating",
          "Base rates"
        ]
      },
      {
        "id": "fall",
        "name": "Fallacies & error",
        "desc": "The standard ways minds and arguments go wrong.",
        "topics": [
          "Sophistical refutations",
          "Cognitive biases",
          "Statistical traps",
          "Motivated reasoning"
        ]
      },
      {
        "id": "dial",
        "name": "Dialectic & debate",
        "desc": "Testing beliefs against opponents, in words.",
        "topics": [
          "Socratic elenchus",
          "Aristotle’s Topics",
          "Steelmanning",
          "Formal debate"
        ]
      },
      {
        "id": "first",
        "name": "First principles",
        "desc": "Break a problem down to what is known to be true, then rebuild it.",
        "topics": [
          "Aristotle’s archai",
          "Descartes’ method",
          "Fermi estimation",
          "Cost-down reasoning"
        ]
      }
    ]
  },
  {
    "id": "lang",
    "branch": "org",
    "name": "Language & Rhetoric",
    "short": "Language",
    "greek": "Ῥητορική",
    "desc": "The instrument everything else passes through: how to read closely, write clearly and persuade honestly.",
    "aristotle": "Rhetoric; On Interpretation",
    "frontier": "Computational linguistics, plain-language movements, the pitch",
    "subs": [
      {
        "id": "gram",
        "name": "Grammar & linguistics",
        "desc": "How language is built and how it changes.",
        "topics": [
          "Grammar & syntax",
          "Etymology: Greek & Latin roots",
          "Phonetics",
          "Language change"
        ]
      },
      {
        "id": "tongues",
        "name": "Other tongues",
        "desc": "Thinking in another language’s shape.",
        "topics": [
          "A living language to fluency",
          "Greek or Latin to reading level",
          "Translation as interpretation"
        ]
      },
      {
        "id": "rhet",
        "name": "Rhetoric",
        "desc": "Persuasion as a craft with ethics.",
        "topics": [
          "Ethos, pathos, logos",
          "Kairos: the right moment",
          "Cicero’s five canons",
          "Propaganda & its defences"
        ]
      },
      {
        "id": "write",
        "name": "Writing",
        "desc": "Clear writing is clear thinking made visible.",
        "topics": [
          "The essay",
          "The plain style",
          "Technical & scientific writing",
          "Editing ruthlessly"
        ]
      },
      {
        "id": "speak",
        "name": "Speaking",
        "desc": "Holding a room, a meeting or a viva.",
        "topics": [
          "Oratory",
          "Storytelling",
          "The pitch",
          "Answering hard questions"
        ]
      }
    ]
  },
  {
    "id": "math",
    "branch": "org",
    "name": "Mathematics",
    "short": "Mathematics",
    "greek": "Μαθηματικά",
    "desc": "The study of structure, quantity and change, and the language in which nature seems to be written.",
    "aristotle": "Mathematics as abstraction (Metaphysics XIII–XIV); Euclid wrote within a generation of Aristotle",
    "frontier": "Mathematics of learning machines, topology, cryptography",
    "subs": [
      {
        "id": "arith",
        "name": "Number & algebra",
        "desc": "From counting to solving for the unknown.",
        "topics": [
          "Number systems",
          "Al-Khwarizmi & algebra",
          "Exponentials & logs",
          "Number theory"
        ]
      },
      {
        "id": "geom",
        "name": "Geometry",
        "desc": "Euclid’s <em>Elements</em>: the first great axiomatic system.",
        "topics": [
          "Euclid Book I by construction",
          "Symmetry & proportion",
          "Trigonometry",
          "Non-Euclidean geometry"
        ]
      },
      {
        "id": "calc",
        "name": "Calculus & change",
        "desc": "The mathematics of motion and growth.",
        "topics": [
          "Limits",
          "Newton & Leibniz",
          "Differential equations",
          "Dynamical systems & chaos"
        ]
      },
      {
        "id": "prob",
        "name": "Probability & statistics",
        "desc": "Reasoning with uncertainty.",
        "topics": [
          "Pascal & Fermat",
          "Distributions",
          "Bayes’ theorem",
          "Experimental design"
        ]
      },
      {
        "id": "linalg",
        "name": "Linear algebra & structure",
        "desc": "Vectors, matrices and the groups behind symmetry.",
        "topics": [
          "Vectors & matrices",
          "Eigenvalues",
          "Group theory",
          "Tensors"
        ]
      },
      {
        "id": "disc",
        "name": "Discrete maths & information",
        "desc": "Graphs, combinatorics and Shannon’s bits.",
        "topics": [
          "Combinatorics",
          "Graph theory",
          "Information theory",
          "Cryptography maths"
        ]
      }
    ]
  },
  {
    "id": "comp",
    "branch": "org",
    "name": "Computation",
    "short": "Computation",
    "greek": "Λογισμός",
    "desc": "Machines that calculate, from the Antikythera mechanism to large language models, and the craft of instructing them.",
    "aristotle": "No Aristotelian text, but the syllogism is the ancestor of the algorithm",
    "frontier": "AI systems, quantum computing, chip design",
    "subs": [
      {
        "id": "hw",
        "name": "Hardware",
        "desc": "From logic gates to silicon.",
        "topics": [
          "Boolean logic & gates",
          "Transistors & semiconductors",
          "Computer architecture",
          "The Antikythera mechanism"
        ]
      },
      {
        "id": "sw",
        "name": "Software",
        "desc": "Writing programs that are correct, clear and fast.",
        "topics": [
          "A first language, then a second",
          "Algorithms & data structures",
          "Operating systems",
          "Software craftsmanship"
        ]
      },
      {
        "id": "ai",
        "name": "Artificial intelligence",
        "desc": "Machines that learn from data.",
        "topics": [
          "Machine learning",
          "Neural networks",
          "Large language models",
          "Alignment & limits"
        ]
      },
      {
        "id": "data",
        "name": "Data & networks",
        "desc": "Storing, moving and securing information.",
        "topics": [
          "Databases",
          "The internet’s stack",
          "Cryptography & security",
          "Privacy"
        ]
      },
      {
        "id": "theory",
        "name": "Theory of computation",
        "desc": "What can be computed at all, and at what cost.",
        "topics": [
          "Turing machines",
          "Computability",
          "Complexity: P vs NP",
          "Lambda calculus"
        ]
      }
    ]
  },
  {
    "id": "phil",
    "branch": "the",
    "name": "Philosophy",
    "short": "Philosophy",
    "greek": "Φιλοσοφία",
    "desc": "The discipline of questions about being, knowledge and mind that no other subject can settle.",
    "aristotle": "Metaphysics, De Anima, Physics I–II",
    "frontier": "Philosophy of mind & AI, philosophy of physics, epistemology of models",
    "subs": [
      {
        "id": "meta",
        "name": "Metaphysics",
        "desc": "What exists, and what it is to be.",
        "topics": [
          "Substance & form",
          "The four causes",
          "Time & change",
          "Possibility & necessity"
        ]
      },
      {
        "id": "epist",
        "name": "Epistemology",
        "desc": "What knowledge is, and how anyone gets it.",
        "topics": [
          "Justification",
          "Scepticism",
          "Testimony & trust",
          "Knowledge vs belief"
        ]
      },
      {
        "id": "mind",
        "name": "Philosophy of mind",
        "desc": "The soul, the self, consciousness, and whether machines can have them.",
        "topics": [
          "Aristotle’s <em>De Anima</em>",
          "The mind–body problem",
          "Consciousness",
          "Machine minds"
        ]
      },
      {
        "id": "phsci",
        "name": "Philosophy of science",
        "desc": "How science works and when it works.",
        "topics": [
          "Popper: falsification",
          "Kuhn: paradigms",
          "Explanation & causation",
          "Models & simulation"
        ]
      },
      {
        "id": "greatc",
        "name": "The great conversation",
        "desc": "Philosophy as a 2,600-year argument across cultures.",
        "topics": [
          "Pre-Socratics",
          "Plato & Aristotle",
          "Stoics & Epicureans",
          "Confucius & the Buddha",
          "Ibn Rushd, Aquinas",
          "Descartes, Hume, Kant"
        ]
      }
    ]
  },
  {
    "id": "rel",
    "branch": "the",
    "name": "Religion & the Sacred",
    "short": "Religion",
    "greek": "Θεολογία",
    "desc": "What people have held sacred and why: the gods, the faiths, their texts and practices, and reasoning about the divine. Aristotle ranked theology alongside mathematics and physics as a theoretical science.",
    "aristotle": "Metaphysics VI.1 and XII: theology as first philosophy; the unmoved mover",
    "frontier": "Comparative religion, cognitive science of religion, contemplative neuroscience",
    "subs": [
      {
        "id": "greekrel",
        "name": "Greek religion & mystery",
        "desc": "The gods, oracles and mysteries the Companions knew.",
        "topics": [
          "The Olympians & Hesiod",
          "Delphi & the oracles",
          "The Eleusinian mysteries",
          "Hero cult"
        ]
      },
      {
        "id": "faiths",
        "name": "The world’s faiths",
        "desc": "The living traditions and what each holds.",
        "topics": [
          "Judaism",
          "Christianity",
          "Islam",
          "Hinduism",
          "Buddhism",
          "Confucianism & Daoism"
        ]
      },
      {
        "id": "texts",
        "name": "Sacred texts",
        "desc": "Scripture read as literature, law and revelation.",
        "topics": [
          "The Hebrew Bible",
          "The New Testament",
          "The Qur’an",
          "The Bhagavad Gita",
          "The Dao De Jing"
        ]
      },
      {
        "id": "theol",
        "name": "Theology",
        "desc": "Reasoning about God from first principles.",
        "topics": [
          "Aristotle’s unmoved mover",
          "Ibn Sina, Maimonides, Aquinas",
          "Arguments for & against God",
          "The problem of evil"
        ]
      },
      {
        "id": "contemp",
        "name": "Contemplative practice",
        "desc": "Philosophy and faith as lived disciplines.",
        "topics": [
          "Prayer & meditation",
          "Ritual & liturgy",
          "Pilgrimage",
          "Spiritual exercises"
        ]
      },
      {
        "id": "relsoc",
        "name": "Religion & society",
        "desc": "How belief shapes law, art, war and science.",
        "topics": [
          "Durkheim & Weber",
          "Religion and science",
          "Secularisation",
          "Religious freedom"
        ]
      }
    ]
  },
  {
    "id": "phys",
    "branch": "the",
    "name": "Cosmos & Matter",
    "short": "Cosmos & Matter",
    "greek": "Φυσική",
    "desc": "Why the physical world is the way it is, from quarks to galaxies.",
    "aristotle": "Physics, On the Heavens, Meteorology, On Generation and Corruption",
    "frontier": "Quantum technology, fusion energy, cosmology after JWST",
    "subs": [
      {
        "id": "mech",
        "name": "Mechanics & energy",
        "desc": "Force, motion and the conservation laws.",
        "topics": [
          "Newton’s laws",
          "Energy & momentum",
          "Thermodynamics",
          "Fluids"
        ]
      },
      {
        "id": "fields",
        "name": "Fields, light & quanta",
        "desc": "Electromagnetism, relativity and the quantum.",
        "topics": [
          "Maxwell’s equations",
          "Optics",
          "Special & general relativity",
          "Quantum mechanics"
        ]
      },
      {
        "id": "chem",
        "name": "Chemistry",
        "desc": "How matter combines and transforms.",
        "topics": [
          "The periodic table",
          "Bonding",
          "Reactions & energy",
          "Organic chemistry"
        ]
      },
      {
        "id": "astro",
        "name": "Astronomy & cosmology",
        "desc": "Our place among the stars.",
        "topics": [
          "Naked-eye sky",
          "Ptolemy to Kepler",
          "Stellar life cycles",
          "The Big Bang"
        ]
      },
      {
        "id": "earth",
        "name": "Earth & climate",
        "desc": "The planet as a system.",
        "topics": [
          "Plate tectonics",
          "Rocks & minerals",
          "Atmosphere & oceans",
          "Climate change"
        ]
      },
      {
        "id": "nuclear",
        "name": "Nuclear & plasma",
        "desc": "The energy locked in nuclei and the fourth state of matter.",
        "topics": [
          "Radioactivity",
          "Fission",
          "Fusion",
          "Plasma physics"
        ]
      }
    ]
  },
  {
    "id": "life",
    "branch": "the",
    "name": "Life & Nature",
    "short": "Life & Nature",
    "greek": "Περὶ ζῴων",
    "desc": "The living world: its kinds, its history, its webs, and the human body within it.",
    "aristotle": "History of Animals, Parts of Animals, Generation of Animals: Aristotle was biology’s first great field observer",
    "frontier": "Genomics, synthetic biology, ecological restoration",
    "subs": [
      {
        "id": "tax",
        "name": "Taxonomy & natural history",
        "desc": "Naming and ordering the living world.",
        "topics": [
          "Aristotle’s classifications",
          "Linnaeus",
          "Cladistics",
          "Field identification"
        ]
      },
      {
        "id": "evo",
        "name": "Evolution & genetics",
        "desc": "How life changes and inherits.",
        "topics": [
          "Darwin & Wallace",
          "Mendel",
          "DNA & the genetic code",
          "CRISPR"
        ]
      },
      {
        "id": "eco",
        "name": "Ecology",
        "desc": "Organisms and their relations.",
        "topics": [
          "Food webs",
          "Biodiversity",
          "Population dynamics",
          "Rewilding"
        ]
      },
      {
        "id": "body",
        "name": "The human body",
        "desc": "Anatomy and physiology.",
        "topics": [
          "Anatomy",
          "Physiology",
          "Nutrition",
          "Sleep"
        ]
      },
      {
        "id": "med",
        "name": "Medicine",
        "desc": "From Hippocrates to evidence-based care.",
        "topics": [
          "Hippocratic tradition",
          "Germ theory",
          "Vaccines",
          "Clinical trials"
        ]
      },
      {
        "id": "brain",
        "name": "Brain & behaviour",
        "desc": "Neurons, minds and conduct.",
        "topics": [
          "Neuroscience",
          "Perception",
          "Psychology",
          "Learning & memory"
        ]
      }
    ]
  },
  {
    "id": "hist",
    "branch": "the",
    "name": "History",
    "short": "History",
    "greek": "Ἱστορία",
    "desc": "<em>Historia</em> means “inquiry”. Deep time, civilisations, states, wars, lives and ideas.",
    "aristotle": "The Constitution of the Athenians; Aristotle also called his biology <em>historia</em>",
    "frontier": "Big History, quantitative history, archaeogenetics",
    "subs": [
      {
        "id": "deep",
        "name": "Deep time",
        "desc": "Eons, eras, periods and the long human prologue.",
        "topics": [
          "Hadean to Phanerozoic",
          "Mass extinctions",
          "Human evolution",
          "The Holocene"
        ]
      },
      {
        "id": "civ",
        "name": "Civilisations",
        "desc": "The great cultures and what each gave.",
        "topics": [
          "Mesopotamia & Egypt",
          "Indus & China",
          "Greece & Rome",
          "The Islamic Golden Age",
          "Mesoamerica"
        ]
      },
      {
        "id": "states",
        "name": "States & empires",
        "desc": "How power organises itself over land and people.",
        "topics": [
          "Empires ancient & modern",
          "Westphalia, 1648",
          "Revolutions",
          "Decolonisation"
        ]
      },
      {
        "id": "war",
        "name": "War & turning points",
        "desc": "The battles and strategies that redirected history.",
        "topics": [
          "Marathon, Gaugamela",
          "Thucydides & Sun Tzu",
          "Clausewitz",
          "The World Wars & Cold War"
        ]
      },
      {
        "id": "lives",
        "name": "Lives",
        "desc": "Biography as moral and practical instruction.",
        "topics": [
          "Plutarch’s <em>Parallel Lives</em>",
          "Hypatia, Leonardo, Newton",
          "Ada Lovelace, Marie Curie",
          "Rosalind Franklin, Turing"
        ]
      },
      {
        "id": "ideas",
        "name": "Ideas & technology",
        "desc": "The revolutions of mind and tool.",
        "topics": [
          "Writing & the alphabet",
          "The printing press",
          "The Scientific Revolution",
          "The Industrial & digital revolutions"
        ]
      }
    ]
  },
  {
    "id": "eth",
    "branch": "pra",
    "name": "Ethics & the Self",
    "short": "Ethics",
    "greek": "Ἠθικά",
    "desc": "How to live: character, choice, friendship, and the shape of a good life.",
    "aristotle": "Nicomachean Ethics, Eudemian Ethics",
    "frontier": "AI ethics, bioethics, the psychology of habit",
    "subs": [
      {
        "id": "virtue",
        "name": "Virtue & character",
        "desc": "Excellence as a habit and the mean between extremes.",
        "topics": [
          "The doctrine of the mean",
          "Courage, temperance, justice",
          "Habituation",
          "Phronēsis"
        ]
      },
      {
        "id": "schools",
        "name": "Moral theories",
        "desc": "The main frameworks and their collisions.",
        "topics": [
          "Virtue ethics",
          "Kant’s duties",
          "Mill’s consequences",
          "Contractualism"
        ]
      },
      {
        "id": "stoa",
        "name": "Practices of the self",
        "desc": "Philosophy as daily training.",
        "topics": [
          "Stoic exercises",
          "Epicurus on pleasure",
          "Journaling",
          "Attention & solitude"
        ]
      },
      {
        "id": "friend",
        "name": "Friendship",
        "desc": "Aristotle devotes two books of the Ethics to friendship.",
        "topics": [
          "Friendships of utility, pleasure & virtue",
          "Loyalty",
          "Love & family",
          "Mentorship"
        ]
      },
      {
        "id": "eud",
        "name": "The good life",
        "desc": "<em>Eudaimonia</em>: flourishing over a whole life.",
        "topics": [
          "Purpose & vocation",
          "Happiness research",
          "Death & meaning",
          "A life plan"
        ]
      },
      {
        "id": "teth",
        "name": "Ethics of technology",
        "desc": "The moral questions new tools raise.",
        "topics": [
          "AI & autonomy",
          "Bioethics",
          "Engineering ethics",
          "Data & surveillance"
        ]
      }
    ]
  },
  {
    "id": "pol",
    "branch": "pra",
    "name": "Politics & Law",
    "short": "Politics & Law",
    "greek": "Πολιτικά",
    "desc": "How people govern themselves, and how the city makes possible the good life.",
    "aristotle": "Politics; the Lyceum’s 158 constitutions",
    "frontier": "Institutional design, state capacity, digital governance",
    "subs": [
      {
        "id": "const",
        "name": "Constitutions",
        "desc": "Forms of government, compared.",
        "topics": [
          "Monarchy, aristocracy, polity",
          "Their corruptions",
          "Comparative politics",
          "Constitution design"
        ]
      },
      {
        "id": "law",
        "name": "Law & justice",
        "desc": "Rules, rights and courts.",
        "topics": [
          "Roman law",
          "Common law",
          "Rights",
          "The rule of law"
        ]
      },
      {
        "id": "pthought",
        "name": "Political thought",
        "desc": "The great arguments about power.",
        "topics": [
          "Plato’s <em>Republic</em>",
          "Machiavelli, Hobbes, Locke",
          "Rousseau, Mill, Marx",
          "Rawls & Nozick"
        ]
      },
      {
        "id": "ir",
        "name": "International order",
        "desc": "States among states.",
        "topics": [
          "Diplomacy",
          "Geopolitics",
          "Alliances & institutions",
          "Grand strategy"
        ]
      },
      {
        "id": "civic",
        "name": "Civic life & infrastructure",
        "desc": "How a city actually works.",
        "topics": [
          "Public services",
          "Infrastructure & planning",
          "Policy-making",
          "Local democracy"
        ]
      }
    ]
  },
  {
    "id": "econ",
    "branch": "pra",
    "name": "Economics & Enterprise",
    "short": "Economics",
    "greek": "Οἰκονομικά",
    "desc": "<em>Oikonomia</em> first meant running a household. Now it covers markets, money, firms and the craft of building ventures.",
    "aristotle": "Politics I on household and wealth-getting; the pseudo-Aristotelian Economics",
    "frontier": "Venture building, behavioural economics, energy economics",
    "subs": [
      {
        "id": "micro",
        "name": "Markets & prices",
        "desc": "Supply, demand and incentives.",
        "topics": [
          "Supply & demand",
          "Incentives",
          "Market failure",
          "Behavioural economics"
        ]
      },
      {
        "id": "macro",
        "name": "Money & macroeconomics",
        "desc": "Money, growth and cycles.",
        "topics": [
          "Money & banking",
          "Inflation",
          "Growth",
          "Public finance"
        ]
      },
      {
        "id": "ehist",
        "name": "Economic history",
        "desc": "How we got rich (and where we didn’t).",
        "topics": [
          "Agrarian economies",
          "The Great Divergence",
          "Industrialisation",
          "Globalisation"
        ]
      },
      {
        "id": "enter",
        "name": "Enterprise",
        "desc": "Starting and running ventures.",
        "topics": [
          "Product & customer",
          "Sales",
          "Finance & accounting",
          "Fundraising"
        ]
      },
      {
        "id": "org",
        "name": "Organisations & leadership",
        "desc": "How groups get things done.",
        "topics": [
          "Small teams",
          "Management",
          "Incentive design",
          "Culture"
        ]
      },
      {
        "id": "house",
        "name": "The household",
        "desc": "Personal economy.",
        "topics": [
          "Budgeting",
          "Compounding",
          "Risk & insurance",
          "Investing basics"
        ]
      }
    ]
  },
  {
    "id": "body",
    "branch": "pra",
    "name": "Body & Play",
    "short": "Body & Play",
    "greek": "Γυμναστική",
    "desc": "The gymnasium stood beside the academy. Strength, skill, competition and play are part of the curriculum.",
    "aristotle": "Politics VIII on gymnastics; Ethics on pleasure and play",
    "frontier": "Sports science, sleep research, play research",
    "subs": [
      {
        "id": "gym",
        "name": "Training",
        "desc": "Strength, endurance and mobility.",
        "topics": [
          "Strength training",
          "Endurance",
          "Mobility",
          "Periodisation"
        ]
      },
      {
        "id": "sport",
        "name": "Sport & competition",
        "desc": "<em>Aretē</em> was first an athlete’s word.",
        "topics": [
          "The ancient Olympics",
          "Team sports",
          "Combat sports",
          "Competing well"
        ]
      },
      {
        "id": "games",
        "name": "Games of mind",
        "desc": "Play as structured thought.",
        "topics": [
          "Chess",
          "Go",
          "Strategy games",
          "Puzzles"
        ]
      },
      {
        "id": "wild",
        "name": "Wild & practical skills",
        "desc": "Competence in the physical world.",
        "topics": [
          "Swimming & riding",
          "Navigation",
          "Climbing",
          "Bushcraft"
        ]
      },
      {
        "id": "rest",
        "name": "Rest & recovery",
        "desc": "The discipline of stopping.",
        "topics": [
          "Sleep",
          "Nutrition",
          "Leisure",
          "Recovery"
        ]
      }
    ]
  },
  {
    "id": "lett",
    "branch": "poi",
    "name": "Letters & Drama",
    "short": "Letters",
    "greek": "Ποιητική",
    "desc": "Literature: the long record of what it is like to be human.",
    "aristotle": "Poetics: mimesis, plot, catharsis",
    "frontier": "Interactive narrative, screenwriting, world literatures",
    "subs": [
      {
        "id": "epic",
        "name": "Epic & myth",
        "desc": "The founding stories.",
        "topics": [
          "Homer’s <em>Iliad</em> & <em>Odyssey</em>",
          "<em>Gilgamesh</em>",
          "Virgil",
          "Norse sagas"
        ]
      },
      {
        "id": "drama",
        "name": "Tragedy & comedy",
        "desc": "The stage as a laboratory of choice.",
        "topics": [
          "Aeschylus, Sophocles, Euripides",
          "Aristophanes",
          "Shakespeare",
          "Modern drama & film"
        ]
      },
      {
        "id": "poetry",
        "name": "Poetry",
        "desc": "Compression, music and memory.",
        "topics": [
          "Sappho & the lyric",
          "Metre",
          "Memorisation",
          "Modern poetry"
        ]
      },
      {
        "id": "novel",
        "name": "The novel & essay",
        "desc": "Long forms of the inner life.",
        "topics": [
          "Cervantes",
          "Austen, Tolstoy, Eliot",
          "Montaigne’s essays",
          "The modern novel"
        ]
      },
      {
        "id": "world",
        "name": "World literatures",
        "desc": "Beyond the Western canon.",
        "topics": [
          "Chinese classics",
          "Persian poetry",
          "Indian epics",
          "African & Latin American literature"
        ]
      }
    ]
  },
  {
    "id": "mus",
    "branch": "poi",
    "name": "Music",
    "short": "Music",
    "greek": "Μουσική",
    "desc": "For the Greeks, <em>mousikē</em> covered melody, poetry and dance. It shaped character and it was studied as number.",
    "aristotle": "Politics VIII on music and character",
    "frontier": "Electronic production, psychoacoustics, generative music",
    "subs": [
      {
        "id": "harm",
        "name": "Harmony & theory",
        "desc": "Pythagoras heard number in the octave.",
        "topics": [
          "Pythagorean ratios",
          "Scales & modes",
          "Counterpoint",
          "Harmony"
        ]
      },
      {
        "id": "perf",
        "name": "Performance",
        "desc": "An instrument, a voice, an ensemble.",
        "topics": [
          "An instrument to competence",
          "Singing",
          "Ensemble",
          "Practice methods"
        ]
      },
      {
        "id": "compo",
        "name": "Composition",
        "desc": "Writing music.",
        "topics": [
          "Melody",
          "Form",
          "Orchestration",
          "Digital production"
        ]
      },
      {
        "id": "mhist",
        "name": "Music through time",
        "desc": "From the Greek modes to electronica.",
        "topics": [
          "Chant",
          "Bach & Mozart",
          "Beethoven to Stravinsky",
          "Jazz, rock, electronic"
        ]
      },
      {
        "id": "acoust",
        "name": "Acoustics",
        "desc": "The physics of sound.",
        "topics": [
          "Waves & resonance",
          "Instrument design",
          "Rooms & halls",
          "Psychoacoustics"
        ]
      }
    ]
  },
  {
    "id": "art",
    "branch": "poi",
    "name": "Art & Architecture",
    "short": "Art & Architecture",
    "greek": "Ἀρχιτεκτονική",
    "desc": "Seeing, drawing, sculpting and building: <em>firmitas, utilitas, venustas</em>, or strength, use and beauty.",
    "aristotle": "Poetics on imitation; Vitruvius wrote three centuries later in the same tradition",
    "frontier": "Computational design, sustainable building, product design",
    "subs": [
      {
        "id": "draw",
        "name": "Drawing",
        "desc": "Learning to see.",
        "topics": [
          "Observational drawing",
          "Perspective",
          "Technical drawing",
          "Sketchbooks"
        ]
      },
      {
        "id": "sculpt",
        "name": "Sculpture & the figure",
        "desc": "The human form in three dimensions.",
        "topics": [
          "Kouroi to Praxiteles",
          "Polykleitos’ canon",
          "Michelangelo",
          "Modern sculpture"
        ]
      },
      {
        "id": "paint",
        "name": "Painting & image",
        "desc": "Colour, light and the picture plane.",
        "topics": [
          "Fresco & oil",
          "Colour theory",
          "Photography",
          "Film"
        ]
      },
      {
        "id": "arch",
        "name": "Architecture",
        "desc": "The orders and beyond.",
        "topics": [
          "Doric, Ionic, Corinthian",
          "Vitruvius",
          "Gothic & Renaissance",
          "Modernism"
        ]
      },
      {
        "id": "city",
        "name": "Cities & landscape",
        "desc": "Designing places.",
        "topics": [
          "Hippodamus’ grid",
          "Urban planning",
          "Landscape & gardens",
          "Public space"
        ]
      },
      {
        "id": "design",
        "name": "Design",
        "desc": "Form serving function.",
        "topics": [
          "Typography",
          "Industrial design",
          "Bauhaus & Dieter Rams",
          "Interface design"
        ]
      }
    ]
  },
  {
    "id": "eng",
    "branch": "poi",
    "name": "Engineering & Manufacture",
    "short": "Engineering",
    "greek": "Μηχανική",
    "desc": "Making things that work, at scale, reliably. The <em>Mechanical Problems</em> came out of Aristotle’s school.",
    "aristotle": "Mechanical Problems (Peripatetic school)",
    "frontier": "Fusion devices, reusable rockets, advanced manufacturing",
    "subs": [
      {
        "id": "mechs",
        "name": "Machines & mechanisms",
        "desc": "Levers to engines.",
        "topics": [
          "Simple machines",
          "Archimedes",
          "Gears & linkages",
          "The steam engine"
        ]
      },
      {
        "id": "mat",
        "name": "Materials",
        "desc": "What things are made of and why they fail.",
        "topics": [
          "Metals & alloys",
          "Ceramics & composites",
          "Fatigue & fracture",
          "Materials for extremes"
        ]
      },
      {
        "id": "elec",
        "name": "Electrical & control",
        "desc": "Circuits, power and feedback.",
        "topics": [
          "Circuits",
          "Power electronics",
          "Control theory",
          "Sensors"
        ]
      },
      {
        "id": "manuf",
        "name": "Manufacturing",
        "desc": "From craft to factory to printer.",
        "topics": [
          "Machining & tolerances",
          "The factory system",
          "Toyota production system",
          "Additive manufacturing"
        ]
      },
      {
        "id": "sys",
        "name": "Systems engineering",
        "desc": "Making many parts into one working whole.",
        "topics": [
          "Requirements",
          "Integration & test",
          "Reliability",
          "Digital twins"
        ]
      },
      {
        "id": "energy",
        "name": "Energy & infrastructure",
        "desc": "The machines that power civilisation.",
        "topics": [
          "Power grids",
          "Renewables",
          "Fusion power",
          "Transport"
        ]
      }
    ]
  }
];

/* Cross-pollinations between sub-areas (ids from C.domains[].subs[].id). */
C.links = [
  {
    "a": "geom",
    "b": "arch",
    "why": "Proportion and the orders: Vitruvius’ rules are geometry in stone."
  },
  {
    "a": "geom",
    "b": "draw",
    "why": "Perspective is projective geometry: Brunelleschi and Alberti."
  },
  {
    "a": "geom",
    "b": "astro",
    "why": "Eratosthenes measured the Earth with shadows and a theorem."
  },
  {
    "a": "harm",
    "b": "arith",
    "why": "Pythagoras found consonance in whole-number ratios."
  },
  {
    "a": "acoust",
    "b": "mech",
    "why": "Sound is the mechanics of vibrating media."
  },
  {
    "a": "prob",
    "b": "induc",
    "why": "Bayes’ theorem is the arithmetic of learning from evidence."
  },
  {
    "a": "prob",
    "b": "ai",
    "why": "Modern machine learning is statistics at scale."
  },
  {
    "a": "prob",
    "b": "med",
    "why": "Evidence-based medicine rests on trials and statistics."
  },
  {
    "a": "linalg",
    "b": "ai",
    "why": "Neural networks are matrices multiplied very fast."
  },
  {
    "a": "linalg",
    "b": "fields",
    "why": "Quantum states live in vector spaces."
  },
  {
    "a": "calc",
    "b": "mech",
    "why": "Newton invented calculus to describe motion."
  },
  {
    "a": "disc",
    "b": "data",
    "why": "Shannon’s information theory underpins every network."
  },
  {
    "a": "theory",
    "b": "syll",
    "why": "Turing’s machines came from the logic of Hilbert and Gödel."
  },
  {
    "a": "hw",
    "b": "elec",
    "why": "A chip is electrical engineering at nanometre scale."
  },
  {
    "a": "hw",
    "b": "chem",
    "why": "Semiconductor fabrication is applied chemistry."
  },
  {
    "a": "ai",
    "b": "mind",
    "why": "Can a machine understand? <em>De Anima</em> meets the transformer."
  },
  {
    "a": "ai",
    "b": "teth",
    "why": "Alignment, bias, power and accountability."
  },
  {
    "a": "ai",
    "b": "gram",
    "why": "Language models learn grammar from statistics alone."
  },
  {
    "a": "ai",
    "b": "games",
    "why": "Deep Blue, AlphaGo: games as AI’s proving ground."
  },
  {
    "a": "first",
    "b": "sys",
    "why": "Question every requirement; delete the part."
  },
  {
    "a": "first",
    "b": "meta",
    "why": "Aristotle’s <em>archai</em>: principles as the starting points of knowledge."
  },
  {
    "a": "dial",
    "b": "rhet",
    "why": "Aristotle: rhetoric is the counterpart of dialectic."
  },
  {
    "a": "fall",
    "b": "brain",
    "why": "Cognitive biases are the psychology of bad logic."
  },
  {
    "a": "tongues",
    "b": "civ",
    "why": "Read a civilisation in its own words."
  },
  {
    "a": "write",
    "b": "epist",
    "why": "Writing is how you find out what you think."
  },
  {
    "a": "speak",
    "b": "enter",
    "why": "The pitch: persuading investors, customers and recruits."
  },
  {
    "a": "rhet",
    "b": "const",
    "why": "Rhetoric was born in assemblies and law courts."
  },
  {
    "a": "epic",
    "b": "war",
    "why": "The <em>Iliad</em> as the first war story; Alexander slept with it."
  },
  {
    "a": "epic",
    "b": "virtue",
    "why": "Homeric heroes as models, and warnings, of character."
  },
  {
    "a": "drama",
    "b": "eud",
    "why": "Tragedy stages the fragility of the good life."
  },
  {
    "a": "tax",
    "b": "meta",
    "why": "Genus and species: Aristotle’s logic applied to animals."
  },
  {
    "a": "evo",
    "b": "deep",
    "why": "Life’s history is written in the rock record."
  },
  {
    "a": "eco",
    "b": "earth",
    "why": "Climate and ecosystems co-evolve."
  },
  {
    "a": "eco",
    "b": "city",
    "why": "Cities as ecosystems; green infrastructure."
  },
  {
    "a": "eco",
    "b": "wild",
    "why": "Knowing the land by moving through it."
  },
  {
    "a": "body",
    "b": "gym",
    "why": "Physiology explains training."
  },
  {
    "a": "body",
    "b": "sculpt",
    "why": "Artists learnt anatomy by dissection, Leonardo above all."
  },
  {
    "a": "med",
    "b": "teth",
    "why": "Consent, trials and the limits of intervention."
  },
  {
    "a": "med",
    "b": "chem",
    "why": "Pharmacology is chemistry in the body."
  },
  {
    "a": "brain",
    "b": "mind",
    "why": "Neuroscience meets the hard problem."
  },
  {
    "a": "deep",
    "b": "astro",
    "why": "Cosmic time, from the Big Bang to Earth’s formation."
  },
  {
    "a": "deep",
    "b": "earth",
    "why": "Geology gave us deep time: Hutton and Lyell."
  },
  {
    "a": "ideas",
    "b": "manuf",
    "why": "The Industrial Revolution was a revolution in making."
  },
  {
    "a": "ideas",
    "b": "phsci",
    "why": "The Scientific Revolution and what science is."
  },
  {
    "a": "states",
    "b": "const",
    "why": "How constitutions rise, decay and change."
  },
  {
    "a": "states",
    "b": "ehist",
    "why": "Trade and taxation built states."
  },
  {
    "a": "war",
    "b": "games",
    "why": "Kriegsspiel, chess and the rehearsal of strategy."
  },
  {
    "a": "war",
    "b": "ir",
    "why": "Diplomacy is what stands between states and war."
  },
  {
    "a": "lives",
    "b": "virtue",
    "why": "Plutarch wrote lives to teach character."
  },
  {
    "a": "civ",
    "b": "arch",
    "why": "Buildings are the surviving record of civilisations."
  },
  {
    "a": "civ",
    "b": "mhist",
    "why": "Every civilisation left a music."
  },
  {
    "a": "greatc",
    "b": "civ",
    "why": "Philosophy moved from Athens to Alexandria, Baghdad, Florence and Königsberg."
  },
  {
    "a": "macro",
    "b": "civic",
    "why": "Public finance pays for infrastructure."
  },
  {
    "a": "micro",
    "b": "games",
    "why": "Game theory: strategic choice in markets."
  },
  {
    "a": "enter",
    "b": "design",
    "why": "Apple: the product as taste integrated with engineering."
  },
  {
    "a": "enter",
    "b": "sys",
    "why": "SpaceX: vertical integration and rapid iteration."
  },
  {
    "a": "org",
    "b": "friend",
    "why": "Teams run on trust, Aristotle’s friendship of shared purpose."
  },
  {
    "a": "org",
    "b": "sys",
    "why": "Conway’s law: systems mirror the organisations that build them."
  },
  {
    "a": "house",
    "b": "arith",
    "why": "Compound interest is exponential growth."
  },
  {
    "a": "stoa",
    "b": "rest",
    "why": "Attention, sleep and the disciplined day."
  },
  {
    "a": "sport",
    "b": "virtue",
    "why": "<em>Aretē</em>: excellence, first on the track."
  },
  {
    "a": "poetry",
    "b": "harm",
    "why": "Greek poetry was sung; metre is rhythm."
  },
  {
    "a": "novel",
    "b": "brain",
    "why": "Fiction as a simulator of other minds."
  },
  {
    "a": "compo",
    "b": "sw",
    "why": "Digital audio and generative music."
  },
  {
    "a": "draw",
    "b": "mechs",
    "why": "Leonardo’s notebooks: drawing as engineering."
  },
  {
    "a": "paint",
    "b": "fields",
    "why": "Newton’s <em>Opticks</em>, then the Impressionists’ light."
  },
  {
    "a": "city",
    "b": "civic",
    "why": "Planning is politics made physical."
  },
  {
    "a": "city",
    "b": "energy",
    "why": "Grids, water, transport: the city’s hidden machine."
  },
  {
    "a": "design",
    "b": "manuf",
    "why": "Design for manufacture."
  },
  {
    "a": "mat",
    "b": "chem",
    "why": "Materials science is chemistry you can load."
  },
  {
    "a": "mat",
    "b": "nuclear",
    "why": "Materials that survive neutrons and plasma."
  },
  {
    "a": "energy",
    "b": "nuclear",
    "why": "Fission today, fusion tomorrow."
  },
  {
    "a": "energy",
    "b": "eco",
    "why": "The energy transition."
  },
  {
    "a": "elec",
    "b": "fields",
    "why": "Maxwell’s equations made the electrical age."
  },
  {
    "a": "mechs",
    "b": "mech",
    "why": "Engines are Newton and Carnot in iron."
  },
  {
    "a": "law",
    "b": "schools",
    "why": "Justice: rights, duties or consequences?"
  },
  {
    "a": "data",
    "b": "law",
    "why": "Privacy, cryptography and the law."
  },
  {
    "a": "eud",
    "b": "const",
    "why": "For Aristotle, the city exists for the sake of the good life."
  },
  {
    "a": "epist",
    "b": "induc",
    "why": "How can evidence ever justify a law of nature?"
  },
  {
    "a": "nuclear",
    "b": "astro",
    "why": "Stars are fusion reactors."
  },
  {
    "a": "pthought",
    "b": "ehist",
    "why": "Smith, Marx and Hayek argued from history."
  },
  {
    "a": "mhist",
    "b": "ideas",
    "why": "Recording and radio changed what music is."
  },
  {
    "a": "theol",
    "b": "meta",
    "why": "Aristotle called first philosophy “theology”: the study of the unmoved mover."
  },
  {
    "a": "theol",
    "b": "greatc",
    "why": "Ibn Sina, Maimonides and Aquinas each reconciled Aristotle with their faith."
  },
  {
    "a": "theol",
    "b": "schools",
    "why": "Divine command, natural law and the grounds of morality."
  },
  {
    "a": "greekrel",
    "b": "epic",
    "why": "Homer and Hesiod were the nearest thing the Greeks had to scripture."
  },
  {
    "a": "greekrel",
    "b": "drama",
    "why": "Tragedy was performed at the festival of Dionysus."
  },
  {
    "a": "texts",
    "b": "tongues",
    "why": "Scripture drove translation, from the Septuagint to the King James Bible."
  },
  {
    "a": "texts",
    "b": "law",
    "why": "Religious law: Torah, canon law, sharia."
  },
  {
    "a": "faiths",
    "b": "civ",
    "why": "Civilisations are often best understood through their faiths."
  },
  {
    "a": "faiths",
    "b": "arch",
    "why": "Temples, cathedrals and mosques: architecture’s greatest commissions."
  },
  {
    "a": "faiths",
    "b": "mhist",
    "why": "Chant, the Mass, qawwali: much of music grew up in worship."
  },
  {
    "a": "contemp",
    "b": "stoa",
    "why": "Stoic exercises and monastic practice share a lineage."
  },
  {
    "a": "contemp",
    "b": "brain",
    "why": "The neuroscience of meditation and attention."
  },
  {
    "a": "contemp",
    "b": "eud",
    "why": "Flourishing and salvation: what a whole life is for."
  },
  {
    "a": "relsoc",
    "b": "ehist",
    "why": "Weber: the Protestant ethic and the spirit of capitalism."
  },
  {
    "a": "relsoc",
    "b": "phsci",
    "why": "Galileo, Darwin and the long argument between faith and science."
  },
  {
    "a": "relsoc",
    "b": "war",
    "why": "The wars of religion and the Peace of Westphalia."
  }
];
