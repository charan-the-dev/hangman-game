import { letters } from "../utils/uilts";
import './keyboard.css';

type KeyBoardProps = {
    addToGuessedLetters: (letter: string) => void,
    guessedLetters: string[],
    hasLost: boolean,
    hasWon: boolean
}

const KeyBoard = ({ addToGuessedLetters, guessedLetters, hasLost, hasWon }: KeyBoardProps) => {
    return (
        <>
            <div className="letters">
                {letters.map((letter, i) => (
                    <button
                        type="button"
                        key={i}
                        className={`letter ${guessedLetters.includes(letter) ? "active" : ""}`}
                        onClick={() => addToGuessedLetters(letter)}
                        disabled={guessedLetters.includes(letter) || hasLost || hasWon}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </>
    )
}

export default KeyBoard