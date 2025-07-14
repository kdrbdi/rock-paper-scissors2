const controls = document.querySelector("#controls");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
const computerChoice = getComputerChoice();

function updateScore() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

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

function playGame() {
  controls.addEventListener("click", (e) => {
    console.log(`You clicked ${e.target.id}`);
    switch (e.target.id) {
      case "rock":
        playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
        break;
      case "paper":
        playerChoice = "paper";
        playRound(playerChoice, getComputerChoice());
        break;
      case "scissors":
        playerChoice = "scissors";
        playRound(playerChoice, getComputerChoice());
        break;
    }
  });
  function playRound(playerChoice, computerChoice) {
    console.log(`Computer played ${computerChoice}`);
    if (playerChoice === computerChoice) {
      result.textContent = "It's a tie!";
    } else if (playerChoice === "rock") {
      switch (computerChoice) {
        case "scissors":
          playerScore++;
          result.textContent = "You win! Rock beats Scissors";
        case "paper":
          computerScore++;
          result.textContent = "You lose! Paper beats rock";
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          playerScore++;
          result.textContent = "You win! Paper beats rock";
        case "scissors":
          computerScore++;
          result.textContent = "You lose! scissors beat paper";
      }
    } else {
      // that leaves scissors
      switch (computerChoice) {
        case "rock":
          computerScore++;
          result.textContent = "You lose! Rock beats scissors";
        case "paper":
          playerScore++;
          result.textContent = "You win! Scissors beat paper";
      }
    }
    updateScore();
    if (playerScore === 5 || computerScore === 5) {
      let winner;
      if (playerScore == computerScore) return (winner = "no one, it's a tie!");
      else {
        playerScore > computerScore
          ? (winner = "You")
          : (winner = "the Computer");
      }
      console.log("This game's winner is.. ", winner);
      console.log(`Human score ${playerScore}`);
      console.log(`Computer score ${computerScore}`);
    }
  }
}

playGame();
