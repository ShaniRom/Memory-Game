"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uid_1 = require("uid");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
// function uid() {
//   return Date.now().toString(36) + Math.random().toString(36);
// }
const cardUrls = [
    "img/HarryCard.gif",
    "img/HermioneCard.gif",
    "/img/RonCard.gif",
    "/img/SnapeCard.gif",
    "/img/DumbledoreCard.gif",
    "/img/SiriusCard.gif",
    "/img/RemusCard.gif",
    "/img/DracoCard.gif"
];
function doubleCards(stringArray) {
    let cards = [];
    stringArray.forEach((url) => {
        const tempCard = { imgUrl: url, pairId: uid_1.uid() }; //we built an object
        const card1 = Object.assign({}, tempCard); //deep copy (copy by value)
        const card2 = Object.assign({}, tempCard); //deep copy (copy by value)
        //copies the same tempcard twice same url and pair id 
        card1.id = uid_1.uid();
        card2.id = uid_1.uid();
        //each card adds to themselves their own uid
        cards = [...cards, card1, card2];
        //this adds them to the array cards[]
    });
    return cards;
}
app.get("/new-game", (req, res) => {
    try {
        const shuffledDeck = doubleCards(cardUrls);
        res.send(shuffleCards(shuffledDeck));
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}
//more simple way to shuffle 
// function shuffleCards(MemoryCards){
//   return MemoryCards.sort(()=> .5 - Math.random())
// }
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
