import './instructions.css';

const HangmanInstructions = () => {
    return (
        <div className="instructions-container">
            <h1 className="instructions-heading">How to Play Hangman</h1>
            <ul className="instructions-list">
                <li className="instructions-item">Guess one letter at a time to find the hidden word.</li>
                <li className="instructions-item">You have a limited number of incorrect guesses.</li>
                <li className="instructions-item">Each incorrect guess adds a part to the hangman drawing.</li>
                <li className="instructions-item">Win by guessing the word before the hangman is fully drawn.</li>
                <li className="instructions-item">Use your logic and vocabulary skills to win!</li>
            </ul>
        </div>
    );
};

export default HangmanInstructions;
