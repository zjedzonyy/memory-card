import { useEffect } from 'react';
import '../styles/Card.css'

export default function Card({ name, url, shuffleDeck, handleSetMarkedCards, id, handleLose }) {

    // Check if the move is valid, then execute it and re-render new set of cards.
    function test() {
        handleSetMarkedCards(id);
        handleLose(id)
        shuffleDeck();
    }

    return (
        <div className="card" onClick={test}>
            <div className="fruit-holder">
                <img src={url} alt={name} />
            </div>
            <div className="fruit-name">
                {name}
            </div>
        </div>
    )
}