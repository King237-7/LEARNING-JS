let sum=0 
let cards=[];
let hasblackjack = false;
let isalive = false;
let message = "";
let player ={
  name: "Jeremie",
  chips: 200
}

let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl= document.querySelector("#card-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name + ": $" + player.chips;

function startGame(){
  isalive=true;
   firstcard =getRandomCard(),
   secondcard = getRandomCard(), 
   sum = firstcard + secondcard,
   cards=[firstcard, secondcard];
  renderGame();
}

function renderGame(){
  cardEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += " " + cards[i];
  }

  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!";
      hasblackjack = true;
  } else {
      message = "You're out of the game!";
      isalive = false;
  }
  sumEl.textContent = "Sum: " + sum; 
  messageEl.textContent = message;
}

function newCard() {
  if(isalive && !hasblackjack){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame(); 
  }
 else{
  message ="Click on the 'RESET GAME' to reset values."
  messageEl.textContent=message;
 }
}


function resetGame() {
  firstcard = getRandomCard();
  secondcard = getRandomCard();
  sum = firstcard + secondcard;
  cards = [firstcard, secondcard];
  hasblackjack = false;
  isalive = true;
  message = "Click 'START GAME' to begin.";
  cardEl.textContent = "Cards:";
  sumEl.textContent = "Sum: ";
  messageEl.textContent = message;
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  }
  else if (randomNumber > 10){
    return 10
  }
  else{
    return randomNumber;
  }
}

