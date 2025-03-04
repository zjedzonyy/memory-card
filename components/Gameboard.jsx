import '../styles/Gameboard.css'
import Card from './Card'

export default function Gameboard({ cards }) {

    return (
        <div className="gameboard">
            {cards.map(card => (
                <Card
                name={card.roman_name}
                url={card.filename}
                key={card.id}
                ></Card>
            ))}
        </div>
    )
}