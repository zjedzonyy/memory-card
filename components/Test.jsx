import initialCards from "./memoryCards"
import { Fragment, useEffect, useState } from "react";
import '../styles/test.css'

export default function Test() {
    const [cards, setCards] = useState([]);

    // const test = initialCards();
    console.log(cards)
    useEffect(() => {
        initialCards().then(cardsData => {
            setCards(cardsData);
        });
    }, []);


    return (
        <ul>
            {cards.map(card => 
                <li key={card.id}>
                {card.roman_name} 
                <img src={card.filename} alt="" />
                </li> )}
        </ul>
    )
}


