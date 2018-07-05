console.log("Elczyk mordko, powodzonka");

//one single round
//compter choice
let userScore = 0;
let computerScore = 0;
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
    computerScore++;
    userScore += 1;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore += 1;
    } else {
      userScore += 1;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore += 1;
    } else {
      userScore += 1;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore += 1;
    } else {
      userScore += 1;
    }
  }
};

//one round result check in console
/*const computerSelection = computerPlay();
console.log("Computer selection: " + computerSelection);

const playerSelection = "rock";
console.log(`User selection: ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));
console.log(`User score: ${userScore}`);
console.log(`Computer score: ${computerScore}`);*/

// 5 rounds game

game = (playerSelection, computerSelection) => {
  playRound(playerSelection, computerSelection);
  userScore = 0;
  computerScore = 0;
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
      `Round ${i} user result: ${userScore} computer result: ${computerScore}`
    );
  }
};

game();

/*one round version with return

//one round
playRound = (playerSelection, computerSelection) => {
  let userScore = 0;
  let computerScore = 0;
  if (playerSelection === computerSelection) {
    return "Game is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      console.log(computerScore);
      return "Computer wins";
    } else {
      userScore++;
      console.log(userScore);
      return "User wins";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      console.log(computerScore);
      return "Computer wins";
    } else {
      userScore++;
      console.log(userScore);
      return "User wins";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      console.log(computerScore);
      return "Computer wins";
    } else {
      userScore++;
      console.log(userScore);
      return "User wins";
    }
  }
}; */
