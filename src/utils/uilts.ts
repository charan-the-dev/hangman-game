const words = [
    "abandon", "ability", "absence", "academy", "account", "accuse", "achieve", "acquire", "action", "address",
    "advance", "advice", "against", "airline", "airport", "alcohol", "allege", "amazing", "analyze", "ancient",
    "animal", "annoyed", "anxiety", "apology", "appeal", "appoint", "approve", "archive", "arguing", "arrange",
    "arrival", "article", "asphalt", "attempt", "attract", "auction", "average", "awesome", "balance", "bargain",
    "barrier", "battery", "beating", "bedroom", "believe", "beneath", "biology", "blaming", "blanket", "blessed",
    "blister", "breathe", "builder", "cabinet", "caliber", "calling", "campaign", "capital", "capture", "careful",
    "carrier", "carving", "caution", "ceiling", "central", "chamber", "charity", "chasing", "chronic", "clarify",
    "clarity", "classic", "climate", "clothes", "coastal", "combine", "comfort", "command", "comment", "company",
    "compete", "complex", "compose", "concept", "concern", "confirm", "connect", "contact", "content", "contest",
    "control", "convert", "cooking", "corrupt", "courage", "creative", "creature", "critics", "crystal", "culture",
    "current", "curtain", "cutting", "danger", "daytime", "dealing", "default", "defeat", "defense", "deliver",
    "density", "deposit", "descent", "deserve", "desktop", "destiny", "develop", "diamond", "digital", "disaster",
    "disease", "dismiss", "dispute", "distant", "diverse", "divided", "doctrine", "dolphin", "drawing", "drought",
    "eagerly", "earlier", "eastern", "economic", "edition", "educate", "elastic", "elderly", "element", "embrace",
    "emotion", "enforce", "engrave", "enlarge", "enrich", "episode", "equality", "erosion", "eternal", "evident",
    "example", "exhaust", "explore", "express", "extreme", "factory", "failure", "familiar", "fantasy", "fashion",
    "feature", "federal", "feeling", "festival", "fiction", "finance", "fitness", "fitting", "flamingo", "floating",
    "focused", "fortune", "founder", "freedom", "furnace", "gallery", "gathered", "general", "genetic", "genuine",
    "gesture", "glowing", "graphic", "gravity", "grocery", "habitat", "harvest", "hazards", "hearing", "heating",
    "heavenly", "history", "honesty", "horizon", "housing", "hunters", "hygiene", "iceberg", "illegal", "illusion"
];


export const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];



export default function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index].toLowerCase();
} 