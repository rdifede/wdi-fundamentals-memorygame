var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[3];
cardsInPlay.push('king');
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push('king');
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
alert("Sorry, try again");
}


