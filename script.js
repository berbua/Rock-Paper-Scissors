//one single round
//compter choice
let userScore = 0;
let computerScore = 0;
let ties = 0;
let computerIco = document.getElementById("comp_choice_div");

// Computer choice removal
removeClass = () => {
  if (computerIco.classList.contains("comp-paper") == true) {
    computerIco.classList.remove("comp-paper");
  } else if (computerIco.classList.contains("comp-rock") == true) {
    computerIco.classList.remove("comp-rock");
  } else if (computerIco.classList.contains("comp-sc") == true) {
    computerIco.classList.remove("comp-sc");
  }
};

// Computer play

computerPlay = () => {
  removeClass();
  let items = ["rock", "paper", "scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  if (randomItem === "paper") {
    computerIco.classList.add("comp-paper");
  } else if (randomItem === "rock") {
    computerIco.classList.add("comp-rock");
  } else if (randomItem === "scissors") {
    computerIco.classList.add("comp-sc");
  }
  return randomItem;
};

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
  console.log("comp: " + computerPlay());
  console.log("comp score: " + computerScore);
  console.log("user score: " + userScore);
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

//Reset button
document.getElementById("reset").addEventListener("click", function() {
  userScore = 0;
  document.getElementById("player_score").innerHTML = userScore;
  computerScore = 0;
  document.getElementById("computer_score").innerHTML = computerScore;
  removeClass();
});
