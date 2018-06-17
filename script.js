console.log("Elczyk mordko, powodzonka");

//one single round

function computerPlay() {
  let items = ["Rock", "Paper", "Scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "Rock" && playerSelection == "Rock") {
    return "Remis";
  } else if (computerSelection == "Rock" && playerSelection == "Paper") {
    return "You won! Paper beats Rock!";
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return "You loose! Rock beats Scissors!";
  }
  if (computerSelection == "Paper" && playerSelection === "Rock") {
    return "You loose! Paper beats Rock!";
  } else if (computerSelection == "Paper" && playerSelection == "Paper") {
    return "Remis";
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    return "You won! Scissors beats Paper!";
  }
  if (computerSelection == "Scissors" && playerSelection == "Rock") {
    return "You won! Rock beats Scissors!";
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return "You loose Scissors beats Paper";
  } else if (computerSelection == "Scissors" && playerSelection == "Scissors") {
    return "Remis";
  }
}

const playerSelection = prompt("Pick one: Rock, Paper, Scissors");
const computerSelection = computerPlay();
console.log("Computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
