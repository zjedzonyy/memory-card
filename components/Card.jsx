import '../styles/Card.css'

export default function Card({ name, url}) {
    return (
        <div className="card" onClick={() => console.log("hej")}>
            <div className="fruit-holder">
                <img src={url} alt={name} />
            </div>
            <div className="fruit-name">
                {name}
            </div>
        </div>
    )
}