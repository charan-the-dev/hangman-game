import { useEffect, useState } from 'react';
import getRandomWord from './utils/uilts'
import KeyBoard from './components/KeyBoard';
import Word from './components/Word';
import Stickman from './components/Stickman';
import HangmanInstructions from './components/Instructions';

const App = () => {
	const [word, setWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const hasWon = word.split("").every(letter => guessedLetters.includes(letter.toLowerCase()));
	const incorrectGuesses = guessedLetters.filter(letter => !word.includes(letter)).length;
	const hasLost = incorrectGuesses >= 6;

	const [instructionHover, setInstructionHover] = useState(false);

	function addToGuessedLetters(letter: string) {
		if (guessedLetters.includes(letter)) {
			return;
		}

		setGuessedLetters([...guessedLetters, letter]);
	}

	function restartGame() {
		setWord(getRandomWord());
		setGuessedLetters([]);
	}

	useEffect(() => {
		// console.log(guessedLetters);
		// console.log(hasLost);
		// console.log(hasWon);
	}, [guessedLetters])

	return (
		<>
			<main>
				<section className='main-game-area'>
					<Stickman guessCount={incorrectGuesses} />
					<section className='letters-area'>
						<Word
							word={word}
							guessedLetters={guessedLetters}
							hasLost={hasLost}
						/>
						<KeyBoard
							addToGuessedLetters={addToGuessedLetters}
							guessedLetters={guessedLetters}
							hasLost={hasLost}
							hasWon={hasWon}
						/>
					</section>
				</section>
				<section className={`restart-game ${(hasLost || hasWon) ? (hasLost ? "lost-bgc" : "win-bgc") : "hidden"}`}>
					<section className='game-status'>
						<h1 className='game-over'>GAME OVER</h1>
						<div className="message">
							{hasWon && <h1 className="win">Yehh! You have won the game</h1>}
							{hasLost && <h1 className='lost'>Oops! You could not guess the word</h1>}
						</div>
						<p>The word was</p>
						<div className="word">{word.toUpperCase()}</div>
					</section>
					<section>
						{
							(hasWon || hasLost) &&
							<div className="play-again">
								<button
									onClick={restartGame}
								>
									Play Again
								</button>
							</div>
						}
					</section>
				</section>
				<div className="instructions-button">
					<button
						type="button"
						onMouseOver={() => setInstructionHover(true)}
						onMouseLeave={() => setInstructionHover(false)}
					>
						i
					</button>
				</div>
				{
					instructionHover && <HangmanInstructions />
				}
			</main >
		</>
	)
}

export default App