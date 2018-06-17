console.log("Elczyk mordko, powodzonka");

//one single round

function computerPlay() {
  let items = ["Rock", "Paper", "Scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "rock" && playerSelection == "rock") {
    return "The result is a tie!";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return "You won! Paper beats rock!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You loose! rock beats Scissors!";
  }
  if (computerSelection == "paper" && playerSelection === "rock") {
    return "You loose! Paper beats rock!";
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    return "The result is a tie!";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You won! Scissors beats paper!";
  }
  if (computerSelection == "scissors" && playerSelection == "rock") {
    return "You won! Rock beats Scissors!";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You loose Scissors beats paper";
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    return "The result is a tie!";
  }
}

const playerSelection = prompt("Pick one: rock, Paper, Scissors");
const computerSelection = computerPlay();
//console.log("Computer: " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));

// 5 rounds game

function game(playerSelection, computerSelection) {
  for (i = 1; i < 3; i++) {
    alert("Round " + i);
    const playerSelection = prompt("Pick one: Rock, Paper, Scissors");
    playerSelection.toLowerCase();
    console.log("Round " + i + " Your choice: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("Round " + i + " Computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(game(playerSelection, computerSelection));
