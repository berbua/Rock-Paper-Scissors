//one single round
//compter choice
let userScore = 0;
let computerScore = 0;
let ties = 0;
let computerIco = document.getElementById("comp_i");

removeClass = () => {
  if (computerIco.classList.contains("fa-hand-paper") == true) {
    computerIco.classList.remove("fa-hand-paper");
  } else if (computerIco.classList.contains("fa-hand-rock") == true) {
    computerIco.classList.remove("fa-hand-rock");
  } else if (computerIco.classList.contains("fa-hand-scissors") == true) {
    computerIco.classList.remove("fa-hand-scissors");
  }
};

let computerPlay = () => {
  removeClass();
  let items = ["rock", "paper", "scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  if (randomItem === "paper") {
    computerIco.classList.add("fa-hand-paper");
  } else if (randomItem === "rock") {
    computerIco.classList.add("fa-hand-rock");
  } else if (randomItem === "scissors") {
    computerIco.classList.add("fa-hand-scissors");
  }
  return randomItem;
};

//player choice
/*let playerSelection = "Rock";
playerSelection = playerSelection.toLowerCase();
console.log(`Player choice: ${playerSelection}`);*/

//one round
playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    ties++;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
    } else {
      userScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
    } else {
      userScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
    } else {
      userScore++;
    }
  }
  console.log(computerPlay());
  console.log(computerScore);
  console.log(userScore);
  document.getElementById("computer_score").innerHTML = computerScore;
  document.getElementById("player_score").innerHTML = userScore;
};

//Events for button clicks
document.getElementById("rock_btn").addEventListener("click", function() {
  playRound("rock", computerPlay());
});
document.getElementById("paper_btn").addEventListener("click", function() {
  playRound("paper", computerPlay());
});
document.getElementById("scissors_btn").addEventListener("click", function() {
  playRound("scissors", computerPlay());
});

document.getElementById("reset").addEventListener("click", function() {
  userScore = 0;
  document.getElementById("player_score").innerHTML = userScore;
  computerScore = 0;
  document.getElementById("computer_score").innerHTML = computerScore;
  removeClass();
});

//one round result check in console
/*const computerSelection = computerPlay();
console.log("Computer selection: " + computerSelection);

const playerSelection = "rock";
console.log(`User selection: ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));
console.log(`User score: ${userScore}`);
console.log(`Computer score: ${computerScore}`);*/

// 5 rounds game

/*game = (playerSelection, computerSelection) => {
  playRound(playerSelection, computerSelection);
  userScore = 0;
  computerScore = 0;
  ties = 0;
  for (i = 1; i < 6; i++) {
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
    playRound(playerSelection, computerSelection);
    console.log(
      `Result after Round ${i} player result: ${userScore} computer result: ${computerScore} ties: ${ties}`
    );
    document.getElementById("computer_score").innerHTML = computerScore;
    document.getElementById("player_score").innerHTML = userScore;
  }
};*/

//game();
