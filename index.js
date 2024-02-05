const cards = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];
const finishedCards = []

function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    // console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    console.log(finishedCards);
   finishedCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    console.log(finishedCards);
    // debugger;
  }
    return finishedCards;
  
}


// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        console.log(countDown--);
    }
}