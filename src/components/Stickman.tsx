import './stickman.css';

type StickmanProps = {
    guessCount: number
}

const stickman = ["head", "stickman-body", "left-arm", "right-arm", "left-leg", "right-leg"];

const Stickman = ({ guessCount }: StickmanProps) => {
    return (
        <section className='stickman-image'>
            <div className="stickman-post">
                <div className="thread"></div>
                {stickman.slice(0, guessCount).map((part, i) => (
                    <div key={i} className={part}></div>
                ))}
                <div className="base"></div>
            </div>
        </section>
    )
}

export default Stickman