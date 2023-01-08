//Generate Random Player Choice
const getComputerChoice = (arr) => {
  const randomSelection = Math.floor(Math.random() * arr.length);
  const choice = arr[randomSelection];
  return choice;
};

//Initial values
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerChoice = "";

//Button selectors
let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let startBtn = document.querySelector(".start-button");
let resetBtn = document.querySelector(".reset-button");

//Event handlers
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

const playRound = () => {
  let computerSelection = getComputerChoice(choices);
  let playerSelection = playerChoice;
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    roundCount++;
    console.log(`Well done! ${playerSelection} beats ${computerSelection}.`);
    console.log(playerScore, computerScore);
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    roundCount++;
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    console.log(playerScore, computerScore);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie.");
    console.log(playerScore, computerScore);
  }
};

startBtn.addEventListener("click", () => {
  game();
});

resetBtn.addEventListener("click", () => {
  roundCount = 0;
});
