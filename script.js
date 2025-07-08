function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);
  switch (randomChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return undefined;
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?");
}
