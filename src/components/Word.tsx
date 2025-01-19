type WordProps = {
    word: string,
    guessedLetters: string[],
    hasLost: boolean
}

const Word = ({ word, guessedLetters, hasLost }: WordProps) => {
    return (
        <div className="word-display">
            {/* {word} */}
            {
                word.split("").map((letter, i) => (
                    <div
                        className="display-letter"
                        key={i}
                    >
                        <span
                            className={`${guessedLetters.includes(letter.toLowerCase()) ? "" : hasLost ? "in-correct" : "hidden"}`}
                        >
                            {letter}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Word