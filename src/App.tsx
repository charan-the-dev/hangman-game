import { useEffect, useRef, useState } from "react";
import Stickman from "./Stickman";

const App = () => {
	const words = ["Pirate", "Rocket", "Dragon", "Circus", "Vampire", "Submarine", "Robot", "Wizard", "Bicycle", "Castle"];
	const [word] = useState(() => words[Math.floor((Math.random() * words.length))]);
	const [wordMapping] = useState(() => {
		let map: { [key: string]: number[] } = {};
		word.split('').map((letter, i) => {
			letter = letter.toLowerCase();
			if (!map[letter]) {
				map[letter] = [];
			}
			map[letter].push(i);
		});

		return map;
	})
	const [guessedWord, setGuessedWord] = useState(new Array(word.length).fill(""))
	const [guess, setGuess] = useState("");
	// const [guessCount, setGuessCount] = useState(0);
	const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);

	useEffect(() => {
	}, [guess, guessedWord]);

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			handleEnter();
		} else if (!e.key.match(/a-zA-Z/)) {
			return;
		}
	}

	function handleEnter() {
		if (guessedWord.join("") === word) {
			console.log("Wow you guessed the word");
		}

		guess.split('').map(letter => {
			if (wordMapping[letter] !== undefined) {
				const indices = wordMapping[letter];
				const newGuessedWord = [...guessedWord];
				indices.map(i => (
					newGuessedWord[i] = letter
				))
				setGuessedWord(newGuessedWord);
			} else {
				setIncorrectGuessCount(prev => prev + 1);
			}
		})
		// setGuessCount(guessCount - incorrectGuessCount);

		setGuess("");
		console.log(guessedWord);
	}

	return (
		<>
			<main className="main-wrapper">
				<div className='words-wrapper'>
					{/* <div id="guess-word">{word}</div> */}
					<div className="guess-area">
						{guessedWord.map((char, i) => (
							<span key={i} className="guess-letter">
								{char}
							</span>
						))}
					</div>
					<input
						placeholder="Type a character and press enter"
						type="text"
						id="guess"
						value={guess}
						onChange={(e) => setGuess(e.target.value.toLowerCase())}
						onKeyDown={handleKeyDown}
						disabled={incorrectGuessCount >= 10}
					/>
					<div className="">Your left over guess counts are: {10 - incorrectGuessCount}</div>
				</div>
				{/* <Stickman wrongGuesses={incorrectGuessCount} /> */}
			</main>
		</>
	)
}

export default App

