  let firstcard =12, secondcard = 7, sum = firstcard + secondcard;
  let cards=[firstcard, secondcard];
  let hasblackjack = false;
  let isalive = true;
  let message = "";

  let messageEl= document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el");
  let cardEl= document.querySelector("#card-el")

  function startGame(){
    renderGame();
  }

  function renderGame(){

    for (let i=0; i<cards.length; i++){
        cardEl.textContent+=" "+cards[i];
        
    }

    if(sum <= 20){
      message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
      message = "Wohoo! You've got Blackjack!";
      hasblackjack = true;
    }
    else{
      message = "You're out of the game!";
      isalive = false;
    }
    alert(message);
    sumEl.textContent+=" "+sum;

    messageEl.textContent = message;
  }

  function newCard(){
    let card = 2;
    sum+=card;
    cards.push(card);
    renderGame();
  }

