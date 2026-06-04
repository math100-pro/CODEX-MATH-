"use strict";

const SPECIAL_EMAIL = "omerobdr@gmail.com";
const SPECIAL_PASSWORD = "152181isA";
const ACCOUNTS_KEY = "mathquest_accounts_v1";
const ACTIVE_EMAIL_KEY = "mathquest_active_email_v1";
const STRIPE_LINK_KEY = "mathquest_stripe_payment_link_v1";

const COURSE_BLUEPRINTS = [
  {
    id: "math",
    title: "Math Mastery",
    short: "M",
    track: "Numbers, logic, algebra, geometry",
    description: "A bright skill path for arithmetic, fractions, algebra, geometry, probability, and fast mental math.",
    gradient: "linear-gradient(135deg, #48c774 0%, #40c9d0 48%, #ffca42 100%)",
    sections: ["Number Arcade", "Fraction Forge", "Algebra City", "Geometry Studio", "Probability Lab"],
    topics: ["place value", "number bonds", "fractions", "ratios", "equations", "graphs", "angles", "area", "chance", "data"]
  },
  {
    id: "greek",
    title: "Greek Explorer",
    short: "G",
    track: "Greek words, roots, phrases",
    description: "Learn Greek vocabulary, roots, useful phrases, mythology words, and patterns that show up in science.",
    gradient: "linear-gradient(135deg, #ffca42 0%, #ff8bb3 44%, #40c9d0 100%)",
    sections: ["Island Basics", "Market Phrases", "Myth Roots", "Science Words"],
    topics: ["greetings", "colors", "numbers", "family", "food", "travel", "myth words", "science roots", "verbs", "questions"]
  },
  {
    id: "astro",
    title: "Astrophysics",
    short: "A",
    track: "Space, gravity, light, stars",
    description: "Travel through planets, stellar life cycles, gravity, light, orbital motion, and cosmic scale.",
    gradient: "linear-gradient(135deg, #8274e8 0%, #40c9d0 45%, #ff7a6b 100%)",
    sections: ["Orbit Camp", "Starlight Lab", "Gravity Workshop", "Cosmic Scale"],
    topics: ["orbits", "planets", "moons", "gravity", "light years", "spectra", "stars", "black holes", "galaxies", "expansion"]
  },
  {
    id: "coding",
    title: "Coding Lab",
    short: "C",
    track: "JavaScript, loops, logic, UI",
    description: "Practice variables, conditions, loops, functions, arrays, debugging, and small creative programs.",
    gradient: "linear-gradient(135deg, #40c9d0 0%, #48c774 42%, #ff7a6b 100%)",
    sections: ["Code Sparks", "Logic Gates", "Loop Factory", "Function Studio", "App Builder"],
    topics: ["variables", "strings", "booleans", "conditions", "loops", "functions", "arrays", "objects", "events", "debugging"]
  }
];

const ADS = [
  {
    title: "Graphing Pad Pro",
    text: "Plot clean graphs, save templates, and turn homework into smooth visuals."
  },
  {
    title: "Nebula Notes",
    text: "A notebook made for formulas, code snippets, vocab, and practice streaks."
  },
  {
    title: "Focus Fuel",
    text: "Tiny challenge packs for five-minute review sessions before class."
  }
];

const LEADERBOARD_BASE = [
  { name: "Mina", mp: 18640, streak: 91 },
  { name: "Kai", mp: 15380, streak: 57 },
  { name: "Zara", mp: 12990, streak: 41 },
  { name: "Theo", mp: 10840, streak: 34 },
  { name: "Iris", mp: 9740, streak: 28 },
  { name: "Niko", mp: 8350, streak: 22 },
  { name: "Lena", mp: 6810, streak: 18 }
];

const GAMES = [
  {
    id: "lightning",
    title: "Lightning Numbers",
    short: "LN",
    color: "primary",
    description: "Rapid arithmetic rounds with combo MP bonuses."
  },
  {
    id: "orbit",
    title: "Orbit Match",
    short: "OM",
    color: "violet",
    description: "Match space ideas with the right facts and numbers."
  },
  {
    id: "glyph",
    title: "Greek Glyph Dash",
    short: "GD",
    color: "sun",
    description: "Choose the meaning before the phrase slips away."
  },
  {
    id: "tiles",
