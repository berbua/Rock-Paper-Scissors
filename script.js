console.log("Elczyk mordko, powodzonka");

//one single round
//compter choice
const computerPlay = () => {
  let items = ["rock", "paper", "scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
};
//player choice
/*let playerSelection = "Rock";
playerSelection = playerSelection.toLowerCase();
console.log(`Player choice: ${playerSelection}`);*/

//one round
playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Game is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
};

//one round result check in console
/*const computerSelection = computerPlay();
console.log("Computer selection: " + computerSelection);

const playerSelection = "rock";
console.log(`User selection: ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));*/

// 5 rounds game

game = (playerSelection, computerSelection) => {
  playRound(playerSelection, computerSelection);
  for (i = 1; i < 3; i++) {
    //inform about the round
    console.log(`Round  ${i}`);
    //player selection
    let playerSelection = prompt("Pick one: Rock, Paper, Scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log("Round " + i + " Player choice: " + playerSelection);
    //computer selection
    let computerSelection = computerPlay();
    console.log("Round " + i + " Computer: " + computerSelection);
    //one round
    playRound();
    console.log(
      "Round " + i + " Result: " + playRound(playerSelection, computerSelection)
    );
  }
};

game();
