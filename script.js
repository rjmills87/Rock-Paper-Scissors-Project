const array = ["Rock", "Paper", "Scissors"];

//Initial player scores
let playerScore = 0;
let computerScore = 0;

//Generate Random Player Choice
function getComputerChoice(arr) {
  const randomSelection = Math.floor(Math.random() * arr.length);
  const choice = arr[randomSelection];
  return choice;
}

//Game logic
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    return `Well done! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie.";
  } else {
    alert("Wrong selection!!! Please choose ROCK 🪨, PAPER 📄 or SCISSORS ✂️.");
  }
}

//Playing through the game
function game() {
  for (i = 1; i < 30; ++i) {
    if (playerScore === 5 && computerScore < 5) {
      console.log("Well done. You are the Winner!!! To play again press OK");
      window.location.reload(true);
    } else if (playerScore < 5 && computerScore === 5) {
      console.log("You lose. Better luck next time. To play again press OK");
      window.location.reload(true);
    } else {
      const playerChoice = prompt(
        "What do you choose: Rock, Paper or Scissors"
      );
      const computerChoice = getComputerChoice(array);
      const playerSelection = playerChoice.toUpperCase();
      const computerSelection = computerChoice.toUpperCase();
      console.log(
        `You chose ${playerChoice.toUpperCase()} and the CPU chose ${computerChoice.toUpperCase()}`
      );
      console.log(playRound(playerSelection, computerSelection));
      console.log(playerScore, computerScore);
    }
  }
}
game();
