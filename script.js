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
const gameActiveText = document.querySelector("#game-active_text");
const resultText = document.querySelector("#result__text");
const gameScores = document.querySelector("#game__scores");
const gameScorePlayer = document.querySelector(".player-score");
const gameScoreComputer = document.querySelector(".computer-score");

init = () => {
  gameScorePlayer.textContent = 0;
  gameScoreComputer.textContent = 0;
  resultText.textContent = "";
  gameActiveText.textContent = "";
  roundText.textContent = "";
  playerScore = 0;
  computerScore = 0;
};

//Generate Random Computer Turn
const getComputerChoice = (arr) => {
  const randomSelection = Math.floor(Math.random() * arr.length);
  const choice = arr[randomSelection];
  return choice;
};

//Game start text
const gamePlaying = document.createElement("h3");
gamePlaying.classList.add("gamePlaying");
gamePlaying.textContent = "The Game Has Started! Let's Play!!!";

//Update round text
const roundText = document.createElement("h3");
roundText.classList.add("roundText");

//Insert game result text
const playerGameWin = document.createElement("h3");
playerGameWin.classList.add("playerGameWin");
playerGameWin.textContent = "Well done! You are the winner!!!";

const computerGameWin = document.createElement("h3");
computerGameWin.classList.add("computerGameWin");
computerGameWin.textContent = "You lose! The Computer is the winner!!!";

//Game Logic
const playRound = () => {
  let computerSelection = getComputerChoice(choices);
  let playerSelection = playerChoice;
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore += 1;
    gameScorePlayer.textContent = playerScore;
    roundText.textContent = `Well done! ${playerChoice} beats ${computerSelection}.`;
    gameText.appendChild(roundText);
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore += 1;
    gameScoreComputer.textContent = computerScore;
    roundText.textContent = `You lose! ${computerSelection} beats ${playerChoice}.`;
    gameText.appendChild(roundText);
  } else if (playerSelection === computerSelection) {
    roundText.textContent = "It's a tie.";
    gameText.appendChild(roundText);
  }
  if (playerScore === 5) {
    resultText.appendChild(playerGameWin);
  } else if (computerScore === 5) {
    resultText.appendChild(computerGameWin);
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
playerChoices();

//Enables game to start
const gameStart = () => {
  playerScore = 0;
  computerScore = 0;
  gameActiveText.appendChild(gamePlaying);
};

//Start Button
startBtn.addEventListener("click", () => {
  gameStart();
});

//Reset Button
resetBtn.addEventListener("click", () => {
  init();
});
