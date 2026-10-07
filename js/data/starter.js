/* starter.js
 * The starter path: Stage Α made concrete. A twelve-week plan for a child (one plan, two tracks: alongside school or
 * home-educated) and a four-week plan for an adult with dedicated time. Each week names one sub-area (sub, an id from
 * domains.js) so it can link to the World View and its tutor prompt. All of this is our prescription, not history.
 * Plain script (not a module) so index.html also works when opened straight from disk.
 */
window.C = window.C || {};

C.starter = {
  "child": {
    "title": "A child’s first twelve weeks",
    "who": "Ages 5–10, Stage Α. One plan, two tracks: fit it around school, or run it as a home-educated day.",
    "tracks": [
      {
        "name": "Alongside school",
        "rhythm": [
          ["Breakfast", "One of Aesop’s fables, then one question: what is it teaching?"],
          ["After school or bedtime, 45–60 minutes", "Read aloud from the week’s story (15 minutes). The week’s making or drawing (20 minutes). Sing something. The why notebook: one question from today, written or dictated (5 minutes)."],
          ["Saturday morning", "Field morning, two or three hours outside. Bring finds home for the cabinet."],
          ["Sunday", "Rest day: nothing is set. At dinner, the symposium: the week’s question, and everyone speaks."],
          ["Once a week", "Mentor hour: twenty minutes alone with one parent, walking. What did you like, what puzzled you, what was hard?"],
          ["Once a month", "Lunar evening: on the Monday nearest the full moon, the child shows the family something they made or found."]
        ]
      },
      {
        "name": "Home-educated",
        "rhythm": [
          ["08:30", "Outside and moving: run, climb, ride, swim."],
          ["09:15", "Story time: the week’s reading aloud, then talk about it. Counting games and puzzles."],
          ["10:30", "The walk: outdoors with questions. Collect, look, ask why."],
          ["12:00", "Lunch together. Aesop’s fable of the day."],
          ["13:00", "Workshop: the week’s making, and drawing a specimen from life."],
          ["14:30", "Free play, unstructured and unassessed."],
          ["16:00", "Music: singing, and practice on a first instrument (20 minutes)."],
          ["16:30", "The why notebook: draw and write the day."],
          ["Wednesday", "Field day: the week’s field trip, all day."],
          ["Friday", "Symposium at dinner: the week’s question. Mentor hour during the week."],
          ["Sunday", "Rest day. Lunar evening once a month."]
        ]
      }
    ],
    "kit": "A shelf or set of boxes for the cabinet of curiosities; a hardback notebook; pencils, a ruler and a magnifying glass; card, clay and glue; a library card. Most of the reading is on the Stage Α list.",
    "weeks": [
      {
        "title": "The cabinet opens",
        "sub": "tax",
        "read": "<em>A Little History of the World</em>, chapters 1–3. Myth: how the world began.",
        "make": "Build the cabinet from boxes or egg trays. Make a label card for each find: name, where and when it was found, a drawing.",
        "field": "A collecting walk. Five finds: a leaf, a stone, a feather, a seed, a shell.",
        "ask": "Is a stone alive? How do you know?",
        "cabinet": 5
      },
      {
        "title": "Deep time",
        "sub": "deep",
        "read": "<em>A Little History</em>, chapters 4–6. Myth: Prometheus brings fire.",
        "make": "A timeline rope across a room, Big Bang at one end and today at the other. Peg on what you learn as you go; it stays up all twelve weeks.",
        "field": "Look for old things: fossils on a beach or in a quarry, or a natural history museum.",
        "ask": "What was here before our house?",
        "cabinet": 10
      },
      {
        "title": "Drawing from life",
        "sub": "draw",
        "read": "<em>A Little History</em>, chapters 7–9. Myth: Pandora’s jar.",
        "make": "Draw one specimen a day, looking more than drawing. Draw the same object three times in the week and compare.",
        "field": "Sit for half an hour and draw a tree: the whole of it, then one leaf.",
        "ask": "Is a drawing of a bird true?",
        "cabinet": 14
      },
      {
        "title": "Who eats whom",
        "sub": "eco",
        "read": "<em>A Little History</em>, chapters 10–12. Myth: Demeter and Persephone, and the seasons.",
        "make": "A bird feeder. Keep a tally of every visitor for the week.",
        "field": "A bird count in a park or garden. Name what you can; draw what you cannot.",
        "ask": "Who eats whom in our garden?",
        "cabinet": 18
      },
      {
        "title": "Number in music",
        "sub": "harm",
        "read": "<em>A Little History</em>, chapters 13–15. Myth: Orpheus.",
        "make": "A one-string instrument from a box and a stretched band or wire. Find the octave by stopping the string halfway.",
        "field": "A listening walk. List every sound you hear and where it came from.",
        "ask": "Why do some notes sound good together?",
        "cabinet": 22
      },
      {
        "title": "Hands and tools",
        "sub": "mechs",
        "read": "<em>A Little History</em>, chapters 16–18. <em>The Way Things Work</em>: levers.",
        "make": "Pinch pots in clay, and a lever or catapult in wood. Measure how far it throws.",
        "field": "Watch someone skilled at work: a potter, a carpenter, a baker, a mechanic. Ask them one question.",
        "ask": "Which is harder: to make a pot, or to explain how?",
        "cabinet": 26
      },
      {
        "title": "The night sky",
        "sub": "astro",
        "read": "<em>A Little History</em>, chapters 19–21. Myth: Orion and the stars.",
        "make": "A moon diary: draw the moon every clear night for the next four weeks.",
        "field": "A night walk. Find the Plough, then follow it to the Pole Star.",
        "ask": "Why does the moon change shape?",
        "cabinet": 29
      },
      {
        "title": "Black ships",
        "sub": "epic",
        "read": "<em>Black Ships Before Troy</em>, the first third. <em>A Little History</em>, chapters 22–24.",
        "make": "Build Troy in card or clay, with its walls and gates.",
        "field": "A museum with Greek pots or statues. Draw one figure you find.",
        "ask": "Was Achilles brave, or just angry?",
        "cabinet": 32
      },
      {
        "title": "The story told aloud",
        "sub": "drama",
        "read": "<em>Black Ships Before Troy</em>, the middle third. <em>A Little History</em>, chapters 25–27.",
        "make": "Act a scene from the story, with masks you make. Learn a few lines by heart.",
        "field": "A play, a puppet show or a storyteller. Or perform your scene for family.",
        "ask": "Should Achilles have gone back to fight?",
        "cabinet": 35
      },
      {
        "title": "Games and contests",
        "sub": "sport",
        "read": "<em>Black Ships Before Troy</em>, to the end. <em>A Little History</em>, chapters 28–30.",
        "make": "A family games day, as at Olympia: running, jumping, throwing. Measure and record every result, then make the prizes.",
        "field": "A wild day: a long walk, a swim, a climb, a river to cross.",
        "ask": "Is it better to win or to play well?",
        "cabinet": 38
      },
      {
        "title": "Columns and buildings",
        "sub": "arch",
        "read": "<em>A Little History</em>, chapters 31–33. Aesop, every morning.",
        "make": "A temple in card or clay. Doric, Ionic or Corinthian: choose, and make the capitals right.",
        "field": "A column hunt in your town. Draw three and name the order of each.",
        "ask": "Why do old banks and museums have columns?",
        "cabinet": 40
      },
      {
        "title": "Show and tell",
        "sub": "tax",
        "read": "<em>A Little History</em>, chapters 34–36. The child chooses a myth to hear again.",
        "make": "Set out the cabinet: forty finds, each named, drawn and explained. Prepare a ten-minute tour.",
        "field": "Invite people in. The child shows the cabinet and the timeline and answers their questions.",
        "ask": "What do you wonder about now?",
        "cabinet": 40
      }
    ]
  },
  "adult": {
    "title": "An adult’s first month",
    "who": "Stage Α for an adult with dedicated time: a sabbatical, a gap between jobs, a long summer. Several hours a day for four weeks.",
    "tracks": [
      {
        "name": "A dedicated day",
        "rhythm": [
          ["07:00", "Body: run, swim, row or walk hard."],
          ["08:00", "Deep reading, three hours. Notebook open, phone away."],
          ["11:00", "The walk: think through the morning, alone, with a friend or with the tutor (copy the week’s prompt)."],
          ["12:30", "Lunch, away from the desk."],
          ["13:30", "Workshop, two to three hours: drawing from life, an instrument, making with the hands."],
          ["16:30", "Collecting and fieldwork: add to the cabinet."],
          ["18:00", "The notebook, by hand: what I learnt, what puzzled me, what failed."],
          ["Evening", "Free reading, music, company."],
          ["Each week", "One field day, one symposium with friends around a question, one rest day."]
        ]
      }
    ],
    "kit": "A notebook kept by hand; a sketchbook and pencils; a field guide to your area; boxes for a cabinet; a library card. Reading from the Stage Α list and the Begin tier of each domain.",
    "weeks": [
      {
        "title": "One story",
        "sub": "deep",
        "read": "<em>A Little History of the World</em>, all of it. Then the first chapters of <em>Maps of Time</em>.",
        "make": "A timeline on a wall, Big Bang to today, on a scale you choose. Fill it in all month.",
        "field": "A natural history museum, a whole day. Start the cabinet: twenty-five finds, each drawn and labelled.",
        "ask": "Which single event on the timeline changed the most?",
        "cabinet": 25
      },
      {
        "title": "Myth and epic",
        "sub": "epic",
        "read": "<em>Mythos</em>. Then the <em>Iliad</em> in a modern translation: at least books 1, 6, 9, 22 and 24.",
        "make": "Learn twenty lines of the <em>Iliad</em> by heart and say them aloud to someone.",
        "field": "A museum’s Greek galleries, or a performance of a Greek play.",
        "ask": "What does Achilles want, and does he get it?",
        "cabinet": 50
      },
      {
        "title": "Nature, looked at",
        "sub": "tax",
        "read": "<em>The Lagoon</em> or <em>Life on Earth</em>; <em>The Invention of Nature</em> if time allows.",
        "make": "Draw from life every day: an hour each afternoon. Work from <em>Drawing on the Right Side of the Brain</em> if you need a method.",
        "field": "A day with a field guide. Identify twenty species and draw five.",
        "ask": "What did Aristotle get right about animals, and how could he tell?",
        "cabinet": 75
      },
      {
        "title": "Music, building and show",
        "sub": "arch",
        "read": "<em>The Story of Art</em>, the chapters on Greece and Rome, then wherever it leads. <em>The Way Things Work</em> for the workshop.",
        "make": "Practise a first instrument daily. Build something in wood or clay. Finish the cabinet at a hundred finds.",
        "field": "An architecture walk: find and draw the three orders in your town.",
        "ask": "What do I wonder about now, and which stage comes next?",
        "cabinet": 100
      }
    ]
  }
};
