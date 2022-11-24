//randomly pick a choice for the computer
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a tie!"
  }
  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock"
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    return "You Win! Rock beats Scissor"
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock"
  }
  else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a tie!"
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    return "You Lose! Scissor beats Paper"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissor"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    return "You Win! Scissor beats Paper"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
    return "It's a tie!"
  }
  else {
    return "Please choose a valid weapon!"
  }
}

const playerSelection = prompt("Choose your weapon (Rock, Paper, Scissors:" );
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));



