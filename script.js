function getComputerChoice(arr) {
  const randomSelection = Math.floor(Math.random() * arr.length);
  const choice = arr[randomSelection];
  return choice;
}
const array = ["Rock", "Paper", "Scissors"];
const result = getComputerChoice(array);

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return `Well done! ${playerSelection} beats ${computerSelection}. You are the winner 😎`;
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}. Better luck next time 😞`;
  } else if (playerSelection === computerSelection) {
    return "It's a draw. Play again.";
  } else {
    alert("Wrong selection!!! Please choose ROCK, PAPER or SCISSORS.");
  }
}

const playerChoice = prompt("What do you choose: Rock, Paper or Scissors");
const playerSelection = playerChoice.toUpperCase();
const computerSelection = result.toUpperCase();
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    i = playRound();
  }
}
game();
