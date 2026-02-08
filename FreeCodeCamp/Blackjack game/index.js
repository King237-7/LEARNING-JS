  let firstcard =12, secondcard = 7, sum = firstcard + secondcard;
  let hasblackjack = false;
  let isalive = true;
  let message = "";

  function startGame(){
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
  }

