import '../styles/Scoreboard.css'

export default function Scoreboard({ currentScore, bestScore }) {

    return(
        <div className="scoreboard">
            <div className="current-score">
                CURRENT SCORE: {currentScore}
            </div>
            <div className="best-score">
                BEST SCORE: {bestScore}
            </div>
        </div>
    )
}