import { useEffect, useState } from "react";

const App = () => {
  const words = ["Pirate", "Rocket", "Dragon", "Circus", "Vampire", "Submarine", "Robot", "Wizard", "Bicycle", "Castle"];
  const index = Math.floor((Math.random() * words.length));
  const word = words[index];
  const [guessedWord, setGuessedWord] = useState(new Array(word.length).fill(""))
  const [guess, setGuess] = useState("");
  const [guessCount, setGuessCount] = useState(10);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setGuessCount(count => count - 1);
    const regex = /[a-zA-Z]/;
    const key = e.key;
    if (key.match(regex)) {
    } 
  }

  useEffect(() => {

  }, [word]);

  return (
    <div className='words-wrapper'>
      {/* <div id="guess-word">{word}</div> */}
      <div className="guess-area">
        {guessedWord.map((char, i) => (
          <span key={i} className="guess-letter">
            {char}
          </span>
        ))}
      </div>
      <input type="text" id="guess" onKeyDown={handleKeyDown} />
      <div className="">Your left over guess counts are: {guessCount}</div>
    </div>
  )
}

export default App