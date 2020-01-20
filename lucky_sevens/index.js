function hideResults() {
  document.getElementById("results").style.display = "none";
} 
function begin() {
  var startBet = document.getElementById("startBet").value;
  var gameMoney = startBet;
  var betsArray = [];
  if (startBet <=0 ) {
    alert("Starting bet must be greater than zero.");
		document.getElementById("startBet").value = "";
    document.getElementById("startBet").focus();
    return false;
  }

  while (gameMoney > 0) {
  var rollOne = rollDice();
  var rollTwo = rollDice();
  var diceRoll = rollOne + rollTwo;
      if(diceRoll != 7) {
          gameMoney -= 1
      } else { 
          gameMoney += 4
      }
      betsArray.push(gameMoney)
  }

  var rollCounter = betsArray.length;
  var highestAmount = Math.max.apply(Math, betsArray);
  var highestPosition = betsArray.indexOf(highestAmount);
  var rollsCountHighest = rollCounter - highestPosition;

  function showResults() {
  document.getElementById("results").style.display = "inline";
  document.getElementById("play").innerHTML = "New Game";
  document.getElementById("startBetAmount").innerHTML = "$" + startBet +".00";
  document.getElementById("totalRolls").innerHTML = rollCounter;
  document.getElementById("highestWon").innerHTML = "$" +     highestAmount + ".00";
  document.getElementById("rollCountHighest").innerHTML = rollsCountHighest;
  };

  showResults();
} 
function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

