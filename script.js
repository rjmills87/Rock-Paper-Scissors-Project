const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerChoice = "";
let playerScore;
let computerScore;

//Button selectors
let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let startBtn = document.querySelector(".start-button");
let resetBtn = document.querySelector(".reset-button");

//Update text
const gameText = document.querySelector("#game__text");
const resultText = document.querySelector("result__text");
const gameScores = document.querySelector("#game__scores");
const gameScorePlayer = document.querySelector(".player-score");
const gameScoreComputer = document.querySelector(".computer-score");

init = () => {
  playerScore = 0;
  computerScore = 0;
  gameScorePlayer.textContent = 0;
  gameScoreComputer.textContent = 0;
};

//Generate Random Computer Turn
const getComputerChoice = (arr) => {
  const randomSelection = Math.floor(Math.random() * arr.length);
  const choice = arr[randomSelection];
  return choice;
};

//Update round text
const playerWin = document.createElement("h3");
playerWin.classList.add("playerWin");
playerWin.textContent = `Well done! ${playerChoice} beats ${getComputerChoice(
  choices
)}.`;

const computerWin = document.createElement("h3");
computerWin.classList.add("computerWin");
computerWin.textContent = `You lose! ${getComputerChoice(
  choices
)} beats ${playerChoice}.`;

const roundTied = document.createElement("h3");
roundTied.classList.add("roundTied");
roundTied.textContent = "It's a tie.";

//Game Logic
const playRound = () => {
  let computerSelection = getComputerChoice(choices);
  let playerSelection = playerChoice;
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    gameScorePlayer.textContent = playerScore += 1;
    gameText.appendChild(playerWin);
    console.log(playerScore, computerScore);
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    gameScoreComputer.textContent = computerScore += 1;
    gameText.appendChild(computerWin);
    console.log(playerScore, computerScore);
  } else if (playerSelection === computerSelection) {
    gameText.appendChild(roundTied);
    console.log(playerScore, computerScore);
  }
  if (playerScore === 5) {
    alert("You are the winner");
  } else if (computerScore === 5) {
    alert(" You Lose! The Computer is the winner");
  }
};

//Event handlers for player choice buttons
let playerChoices = () => {
  rockBtn.addEventListener("click", () => {
    playerChoice = "ROCK";
    playRound();
  });

  paperBtn.addEventListener("click", () => {
    playerChoice = "PAPER";
    playRound();
  });

  scissorsBtn.addEventListener("click", () => {
    playerChoice = "SCISSORS";
    playRound();
  });
};

//Enables game to start
const gameStart = () => {
  playerScore = 0;
  computerScore = 0;
  gameScorePlayer.textContent = 0;
  gameScoreComputer.textContent = 0;
  playerChoices();
};

//Start Button
startBtn.addEventListener("click", () => {
  gameStart();
  console.log("The game has started lets play.");
});

//Reset Button
resetBtn.addEventListener("click", () => {
  init();
  console.log("The game is reset");
});
