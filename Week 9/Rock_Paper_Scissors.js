function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
      return "It's a tie!";
  } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
  ) {
      return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (result.startsWith("You Win")) {
          playerScore++;
      } else if (result.startsWith("You Lose")) {
          computerScore++;
      }
  }

  if (playerScore > computerScore) {
      console.log("You win the game!");
  } else if (playerScore < computerScore) {
      console.log("You lose the game!");
  } else {
      console.log("It's a tie!");
  }
}

playGame();
