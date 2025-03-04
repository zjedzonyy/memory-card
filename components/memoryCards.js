import axios from "axios";

const url = 'https://api.api-onepiece.com/v2/fruits/en'
const wrong = "https://images.api-onepiece.com/fruits/";

export default async function initialCards() {

    const data = await axios.get(url);
    const cards = await data.data.filter(item =>  item.filename !== wrong);

    // console.log(cards);
    return cards;
}



