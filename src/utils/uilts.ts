const words = [
    "Pirate",
    "Rocket",
    "Dragon",
    "Circus",
    "Vampire",
    "Submarine",
    "Robot",
    "Wizard",
    "Bicycle",
    "Castle"
];

export const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];



export default function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index].toLowerCase();
} 