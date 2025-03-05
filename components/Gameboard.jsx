import { use, useState, useEffect } from 'react'
import '../styles/Gameboard.css'
import Card from './Card'

export default function Gameboard({ cards, shuffleDeck, handleSetMarkedCards, handleSetWin, markedCards, handleLose }) {
    // Check if the player has won the game
    useEffect(() => {
        handleSetWin();
        console.log("Wywolano z useEffect!")
    }, [markedCards]);


    return (
        <div className="gameboard">
            {cards.map(card => (
                <Card
                name={card.roman_name}
                url={card.filename}
                key={card.id}
                shuffleDeck={shuffleDeck}
                handleSetMarkedCards={handleSetMarkedCards}
                id={card.id}
                handleSetWin={handleSetWin}
                markedCards={markedCards}
                handleLose={handleLose}
                ></Card>
            ))}
        </div>
    )
}