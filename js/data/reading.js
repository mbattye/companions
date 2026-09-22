/* reading.js
 * Reading list per domain. tier: Begin | Classic | Deeper.
 * Plain script (not a module) so index.html also works when opened straight from disk.
 */
window.C = window.C || {};

C.reading = {
  "logic": [
    {
      "tier": "Begin",
      "title": "The Art of Logic",
      "author": "Eugenia Cheng",
      "note": "Logic applied to everyday argument"
    },
    {
      "tier": "Begin",
      "title": "Thinking, Fast and Slow",
      "author": "Daniel Kahneman",
      "note": "The map of our biases"
    },
    {
      "tier": "Classic",
      "title": "Prior Analytics; Sophistical Refutations",
      "author": "Aristotle",
      "note": "Where formal logic starts"
    },
    {
      "tier": "Classic",
      "title": "Novum Organum",
      "author": "Francis Bacon",
      "note": "The case for induction"
    },
    {
      "tier": "Classic",
      "title": "Discourse on the Method",
      "author": "René Descartes",
      "note": "Rules for directing the mind"
    },
    {
      "tier": "Deeper",
      "title": "Gödel, Escher, Bach",
      "author": "Douglas Hofstadter",
      "note": "Logic, self-reference and mind"
    },
    {
      "tier": "Deeper",
      "title": "Probability Theory: The Logic of Science",
      "author": "E. T. Jaynes",
      "note": "Bayesian reasoning, rigorously"
    }
  ],
  "lang": [
    {
      "tier": "Begin",
      "title": "On Writing Well",
      "author": "William Zinsser",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Thank You for Arguing",
      "author": "Jay Heinrichs",
      "note": "Classical rhetoric made practical"
    },
    {
      "tier": "Classic",
      "title": "Rhetoric",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Institutio Oratoria",
      "author": "Quintilian",
      "note": "The Roman education of an orator"
    },
    {
      "tier": "Classic",
      "title": "Politics and the English Language",
      "author": "George Orwell",
      "note": "Essay"
    },
    {
      "tier": "Deeper",
      "title": "The Language Instinct",
      "author": "Steven Pinker",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Sense of Style",
      "author": "Steven Pinker",
      "note": ""
    }
  ],
  "math": [
    {
      "tier": "Begin",
      "title": "Mathematics: A Very Short Introduction",
      "author": "Timothy Gowers",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Joy of x",
      "author": "Steven Strogatz",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Flatland",
      "author": "Edwin A. Abbott",
      "note": "Geometry as a novella"
    },
    {
      "tier": "Classic",
      "title": "Elements",
      "author": "Euclid",
      "note": "Book I with compass and straightedge"
    },
    {
      "tier": "Classic",
      "title": "How to Solve It",
      "author": "George Pólya",
      "note": "The method of problem solving"
    },
    {
      "tier": "Classic",
      "title": "A Mathematician’s Apology",
      "author": "G. H. Hardy",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "What Is Mathematics?",
      "author": "Richard Courant & Herbert Robbins",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Calculus",
      "author": "Michael Spivak",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Linear Algebra Done Right",
      "author": "Sheldon Axler",
      "note": ""
    }
  ],
  "comp": [
    {
      "tier": "Begin",
      "title": "Code",
      "author": "Charles Petzold",
      "note": "From telegraph relays to a computer"
    },
    {
      "tier": "Begin",
      "title": "The Innovators",
      "author": "Walter Isaacson",
      "note": "From Lovelace to the web"
    },
    {
      "tier": "Classic",
      "title": "Computing Machinery and Intelligence",
      "author": "Alan Turing",
      "note": "The 1950 paper"
    },
    {
      "tier": "Classic",
      "title": "Structure and Interpretation of Computer Programs",
      "author": "Harold Abelson & Gerald Sussman",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Mythical Man-Month",
      "author": "Frederick P. Brooks",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Elements of Computing Systems",
      "author": "Noam Nisan & Shimon Schocken",
      "note": "Build a computer from NAND gates"
    },
    {
      "tier": "Deeper",
      "title": "Artificial Intelligence: A Modern Approach",
      "author": "Stuart Russell & Peter Norvig",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Alignment Problem",
      "author": "Brian Christian",
      "note": ""
    }
  ],
  "phil": [
    {
      "tier": "Begin",
      "title": "Sophie’s World",
      "author": "Jostein Gaarder",
      "note": "A novel history of philosophy"
    },
    {
      "tier": "Begin",
      "title": "Think",
      "author": "Simon Blackburn",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Five Dialogues",
      "author": "Plato",
      "note": "Euthyphro, Apology, Crito, Meno, Phaedo"
    },
    {
      "tier": "Classic",
      "title": "Metaphysics; De Anima",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Meditations on First Philosophy",
      "author": "René Descartes",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "An Enquiry Concerning Human Understanding",
      "author": "David Hume",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Structure of Scientific Revolutions",
      "author": "Thomas Kuhn",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Logic of Scientific Discovery",
      "author": "Karl Popper",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Conscious Mind",
      "author": "David Chalmers",
      "note": ""
    }
  ],
  "rel": [
    {
      "tier": "Begin",
      "title": "The World’s Religions",
      "author": "Huston Smith",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "A History of God",
      "author": "Karen Armstrong",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Theogony",
      "author": "Hesiod",
      "note": "The Greek gods’ genealogy"
    },
    {
      "tier": "Classic",
      "title": "The Hebrew Bible and New Testament",
      "author": "",
      "note": "Start with Genesis, Job, Psalms, the Gospels"
    },
    {
      "tier": "Classic",
      "title": "The Qur’an",
      "author": "",
      "note": "M. A. S. Abdel Haleem’s translation"
    },
    {
      "tier": "Classic",
      "title": "Bhagavad Gita; Dhammapada; Dao De Jing; Analects",
      "author": "",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Confessions",
      "author": "Augustine",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Guide for the Perplexed",
      "author": "Maimonides",
      "note": "Aristotle and Scripture reconciled"
    },
    {
      "tier": "Classic",
      "title": "Summa Theologiae (selections)",
      "author": "Thomas Aquinas",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Pensées",
      "author": "Blaise Pascal",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Varieties of Religious Experience",
      "author": "William James",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Philosophy as a Way of Life",
      "author": "Pierre Hadot",
      "note": "Ancient philosophy as spiritual exercise"
    },
    {
      "tier": "Deeper",
      "title": "The Protestant Ethic and the Spirit of Capitalism",
      "author": "Max Weber",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "A Secular Age",
      "author": "Charles Taylor",
      "note": ""
    }
  ],
  "phys": [
    {
      "tier": "Begin",
      "title": "Seven Brief Lessons on Physics",
      "author": "Carlo Rovelli",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "A Short History of Nearly Everything",
      "author": "Bill Bryson",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Disappearing Spoon",
      "author": "Sam Kean",
      "note": "The periodic table through stories"
    },
    {
      "tier": "Classic",
      "title": "Dialogue Concerning the Two Chief World Systems",
      "author": "Galileo Galilei",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "QED",
      "author": "Richard Feynman",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Cosmos",
      "author": "Carl Sagan",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Feynman Lectures on Physics",
      "author": "Feynman, Leighton & Sands",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Theoretical Minimum",
      "author": "Leonard Susskind & George Hrabovsky",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Sustainable Energy – Without the Hot Air",
      "author": "David MacKay",
      "note": ""
    }
  ],
  "life": [
    {
      "tier": "Begin",
      "title": "The Lagoon: How Aristotle Invented Science",
      "author": "Armand Marie Leroi",
      "note": "Aristotle as biologist"
    },
    {
      "tier": "Begin",
      "title": "Life on Earth",
      "author": "David Attenborough",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Invention of Nature",
      "author": "Andrea Wulf",
      "note": "Humboldt and ecology"
    },
    {
      "tier": "Classic",
      "title": "History of Animals",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Voyage of the Beagle; On the Origin of Species",
      "author": "Charles Darwin",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Silent Spring",
      "author": "Rachel Carson",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Selfish Gene",
      "author": "Richard Dawkins",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Gene; The Emperor of All Maladies",
      "author": "Siddhartha Mukherjee",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Behave",
      "author": "Robert Sapolsky",
      "note": ""
    }
  ],
  "hist": [
    {
      "tier": "Begin",
      "title": "A Little History of the World",
      "author": "E. H. Gombrich",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Maps of Time",
      "author": "David Christian",
      "note": "Big History"
    },
    {
      "tier": "Classic",
      "title": "Histories",
      "author": "Herodotus",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "History of the Peloponnesian War",
      "author": "Thucydides",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Parallel Lives",
      "author": "Plutarch",
      "note": "Start with Alexander and Caesar"
    },
    {
      "tier": "Classic",
      "title": "The Campaigns of Alexander",
      "author": "Arrian",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Alexander of Macedon",
      "author": "Peter Green",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "SPQR",
      "author": "Mary Beard",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Guns, Germs, and Steel",
      "author": "Jared Diamond",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "On War",
      "author": "Carl von Clausewitz",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Guns of August",
      "author": "Barbara Tuchman",
      "note": ""
    }
  ],
  "eth": [
    {
      "tier": "Begin",
      "title": "The Happiness Hypothesis",
      "author": "Jonathan Haidt",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Man’s Search for Meaning",
      "author": "Viktor Frankl",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Nicomachean Ethics",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Enchiridion",
      "author": "Epictetus",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Letters from a Stoic",
      "author": "Seneca",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Meditations",
      "author": "Marcus Aurelius",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Groundwork of the Metaphysics of Morals",
      "author": "Immanuel Kant",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Utilitarianism",
      "author": "John Stuart Mill",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "After Virtue",
      "author": "Alasdair MacIntyre",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Fragility of Goodness",
      "author": "Martha Nussbaum",
      "note": "Luck and ethics in Greek tragedy and philosophy"
    }
  ],
  "pol": [
    {
      "tier": "Begin",
      "title": "Why Nations Fail",
      "author": "Daron Acemoglu & James Robinson",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Origins of Political Order",
      "author": "Francis Fukuyama",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Politics; The Constitution of the Athenians",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Republic",
      "author": "Plato",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Prince",
      "author": "Niccolò Machiavelli",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Leviathan",
      "author": "Thomas Hobbes",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Second Treatise of Government",
      "author": "John Locke",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "On Liberty",
      "author": "John Stuart Mill",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Democracy in America",
      "author": "Alexis de Tocqueville",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "A Theory of Justice",
      "author": "John Rawls",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Power Broker",
      "author": "Robert Caro",
      "note": "Power and public infrastructure"
    },
    {
      "tier": "Deeper",
      "title": "Diplomacy",
      "author": "Henry Kissinger",
      "note": ""
    }
  ],
  "econ": [
    {
      "tier": "Begin",
      "title": "The Worldly Philosophers",
      "author": "Robert Heilbroner",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Basic Economics",
      "author": "Thomas Sowell",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Psychology of Money",
      "author": "Morgan Housel",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Wealth of Nations",
      "author": "Adam Smith",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The General Theory of Employment, Interest and Money",
      "author": "John Maynard Keynes",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Capitalism, Socialism and Democracy",
      "author": "Joseph Schumpeter",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Use of Knowledge in Society",
      "author": "Friedrich Hayek",
      "note": "Essay"
    },
    {
      "tier": "Deeper",
      "title": "The Lever of Riches",
      "author": "Joel Mokyr",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "High Output Management",
      "author": "Andrew Grove",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Innovator’s Dilemma",
      "author": "Clayton Christensen",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Zero to One",
      "author": "Peter Thiel",
      "note": ""
    }
  ],
  "body": [
    {
      "tier": "Begin",
      "title": "Born to Run",
      "author": "Christopher McDougall",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The Inner Game of Tennis",
      "author": "W. Timothy Gallwey",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Homo Ludens",
      "author": "Johan Huizinga",
      "note": "Play as the root of culture"
    },
    {
      "tier": "Classic",
      "title": "Victory Odes",
      "author": "Pindar",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Chess Fundamentals",
      "author": "José Raúl Capablanca",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Starting Strength",
      "author": "Mark Rippetoe",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Peak",
      "author": "Anders Ericsson & Robert Pool",
      "note": "Deliberate practice"
    },
    {
      "tier": "Deeper",
      "title": "The Art of Learning",
      "author": "Josh Waitzkin",
      "note": ""
    }
  ],
  "lett": [
    {
      "tier": "Begin",
      "title": "Mythos",
      "author": "Stephen Fry",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "How to Read Literature Like a Professor",
      "author": "Thomas C. Foster",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Iliad; Odyssey",
      "author": "Homer",
      "note": "Fagles or Emily Wilson translations"
    },
    {
      "tier": "Classic",
      "title": "Oresteia; Oedipus the King; Medea",
      "author": "Aeschylus, Sophocles, Euripides",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Poetics",
      "author": "Aristotle",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Aeneid",
      "author": "Virgil",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "The Divine Comedy",
      "author": "Dante",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Hamlet; King Lear",
      "author": "William Shakespeare",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Don Quixote",
      "author": "Miguel de Cervantes",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Essays",
      "author": "Michel de Montaigne",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Middlemarch",
      "author": "George Eliot",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Mimesis",
      "author": "Erich Auerbach",
      "note": "How literature represents reality"
    }
  ],
  "mus": [
    {
      "tier": "Begin",
      "title": "What to Listen For in Music",
      "author": "Aaron Copland",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "This Is Your Brain on Music",
      "author": "Daniel Levitin",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Gradus ad Parnassum",
      "author": "Johann Joseph Fux",
      "note": "The counterpoint primer Haydn and Beethoven studied"
    },
    {
      "tier": "Classic",
      "title": "Politics VIII",
      "author": "Aristotle",
      "note": "Music and character"
    },
    {
      "tier": "Deeper",
      "title": "The Rest Is Noise",
      "author": "Alex Ross",
      "note": "Music of the twentieth century"
    },
    {
      "tier": "Deeper",
      "title": "Tonal Harmony",
      "author": "Stefan Kostka & Dorothy Payne",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Music, Physics and Engineering",
      "author": "Harry F. Olson",
      "note": ""
    }
  ],
  "art": [
    {
      "tier": "Begin",
      "title": "The Story of Art",
      "author": "E. H. Gombrich",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Ways of Seeing",
      "author": "John Berger",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Drawing on the Right Side of the Brain",
      "author": "Betty Edwards",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Ten Books on Architecture",
      "author": "Vitruvius",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "On Painting",
      "author": "Leon Battista Alberti",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Lives of the Artists",
      "author": "Giorgio Vasari",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Notebooks",
      "author": "Leonardo da Vinci",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "A Pattern Language",
      "author": "Christopher Alexander",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Death and Life of Great American Cities",
      "author": "Jane Jacobs",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Design of Everyday Things",
      "author": "Don Norman",
      "note": ""
    }
  ],
  "eng": [
    {
      "tier": "Begin",
      "title": "The Way Things Work",
      "author": "David Macaulay",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "Structures: Or Why Things Don’t Fall Down",
      "author": "J. E. Gordon",
      "note": ""
    },
    {
      "tier": "Begin",
      "title": "The New Science of Strong Materials",
      "author": "J. E. Gordon",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "Mechanical Problems",
      "author": "Aristotelian school",
      "note": ""
    },
    {
      "tier": "Classic",
      "title": "To Engineer Is Human",
      "author": "Henry Petroski",
      "note": "Learning from failure"
    },
    {
      "tier": "Classic",
      "title": "The Soul of a New Machine",
      "author": "Tracy Kidder",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Art of Electronics",
      "author": "Paul Horowitz & Winfield Hill",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "The Goal",
      "author": "Eliyahu Goldratt",
      "note": "Manufacturing as a novel"
    },
    {
      "tier": "Deeper",
      "title": "The Toyota Way",
      "author": "Jeffrey Liker",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Skunk Works",
      "author": "Ben Rich",
      "note": ""
    },
    {
      "tier": "Deeper",
      "title": "Liftoff",
      "author": "Eric Berger",
      "note": "SpaceX’s early years"
    }
  ]
};
