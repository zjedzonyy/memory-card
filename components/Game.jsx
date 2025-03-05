import '../styles/Game.css'
import Gameboard from './Gameboard'
import Scoreboard from './Scoreboard'
import initialCards from './memoryCards'
import { useState, useEffect } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Game() {
    const [cards, setCards] = useState([]);
    const [markedCards, setMarkedCards] = useState([]);
    const [bestScores, setBestScores] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    // Fetch data from API, only on first loading.
    useEffect(() => {
        initialCards().then(cardsData => {
            setCards(cardsData);
        });
    }, []);

    // Check if the player has won the game.
    function handleSetWin() {
        if (markedCards.length === 23) {
            setIsOpen2(true)
            setBestScores(prevData => [...prevData, markedCards.length])
            setMarkedCards([]);
        }
    }

    // Check if the player has lost the game.
    function handleLose(id) {
        if (markedCards.find(cardId => cardId === id)) {
            setIsOpen(true)
            console.log('Your score: ', markedCards.length)
            setBestScores(prevData => [...prevData, markedCards.length])
            setMarkedCards([]);
        }
    }

    // Takes unique card.id and adds it to the state markedCards.
    function handleSetMarkedCards(id) {
        setMarkedCards(prevData => [...prevData, id]);
    }

    // Handles the randomization of cards display.
    function shuffleDeck() {
        const array = [...cards];
        for (var i = array.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setCards(array);
    }

    // Prepares cards to display and checks if at least one of them is unMarked.
    function getRandomCards(cards, count = 6) {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }
    
    let displayCards = getRandomCards(cards, 6);
    
    const unmarkedCards = cards.filter(card => !markedCards.includes(card.id));
    
    if (unmarkedCards.length > 0 && displayCards.every(card => markedCards.includes(card.id))) {
        const randomUnmarked = unmarkedCards[Math.floor(Math.random() * unmarkedCards.length)];
        displayCards[0] = randomUnmarked;
    }
    

    // Keep track of current score
    const currentScore = markedCards.length;

    // Keep track best score
    const bestScore =  bestScores.length > 0 ? Math.max(...bestScores) : 0;

    
    return (
        <div className="wrapper">
            <div className="game">

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">You have lost!</DialogTitle>
                    <div className="flex gap-4">
                    <button onClick={() => setIsOpen(false)}>Play again</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>


            <Dialog open={isOpen2} onClose={() => setIsOpen2(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">You have won!</DialogTitle>
                    <div className="flex gap-4">
                    <button onClick={() => setIsOpen2(false)}>Play again</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>

                <Scoreboard
                currentScore={currentScore}
                bestScore={bestScore}
                ></Scoreboard>
                <Gameboard
                cards={displayCards}
                shuffleDeck={shuffleDeck}
                handleSetMarkedCards={handleSetMarkedCards}
                handleSetWin={handleSetWin}
                markedCards={markedCards}
                handleLose={handleLose}
                ></Gameboard>
                
            </div>
        </div>
    )
}