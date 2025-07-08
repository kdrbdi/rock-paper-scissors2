function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return undefined;
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanChoice = getHumanChoice().toLowerCase();
  const computerChoice = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return console.log("It's a tie!");
    } else if (humanChoice === "rock") {
      switch (computerChoice) {
        case "scissors":
          humanScore++;
          return console.log("You win! Rock beats Scissors");
        case "paper":
          computerScore++;
          return console.log("You lose! Paper beats rock");
      }
    } else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          humanScore++;
          return console.log("You win! Paper beats rock");
        case "scissors":
          computerScore++;
          return console.log("You lose! scissors beat paper");
      }
    } else {
      // that leaves scissors
      switch (computerChoice) {
        case "rock":
          computerScore++;
          return console.log("You lose! Rock beats scissors");
        case "paper":
          humanScore++;
          return console.log("You win! Scissors beat paper");
      }
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  let winner;
  if (humanScore == computerScore) return (winner = "no one, it's a tie!");
  else {
    humanScore > computerScore ? (winner = "You") : (winner = "the Computer");
  }
  console.log("And the winner is.. ", winner);
  console.log(`Human score ${humanScore}`);
  console.log(`Computer score ${computerScore}`);
}

playGame();
