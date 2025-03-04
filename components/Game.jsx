import '../styles/Game.css'
import Gameboard from './Gameboard'
import Scoreboard from './Scoreboard'
import initialCards from './memoryCards'
import { useState, useEffect } from 'react'

export default function Game() {
    const [cards, setCards] = useState([]);
    const [markedCards, setMarkedCards] = useState([]);

    // const test = initialCards();
    console.log(cards)
    useEffect(() => {
        initialCards().then(cardsData => {
            setCards(cardsData.slice(0,6));
        });
    }, []);
    
    
    return (
        <div className="game">
            <Scoreboard></Scoreboard>
            <Gameboard cards={cards}></Gameboard>
        </div>
    )
}