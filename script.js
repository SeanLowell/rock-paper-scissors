function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissor"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

/*function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}*/


/*function playRound(playerSelection, computerSelection) {

  if (playerSelection === "Rock" && computerSelection === "Rock") {
    rounds++;
    return "It's a tie!"
  }
  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    rounds++;
    computerScore++;
    return "You Lose! Paper beats Rock"
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    rounds++;
    playerScore++;
    return "You Win! Rock beats Scissor"
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    rounds++;
    playerScore++;
    return "You win! Paper beats Rock"
  }
  else if (playerSelection === "Paper" && computerSelection === "Paper") {
    rounds++;
    return "It's a tie!"
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    rounds++;
    computerScore++;
    return "You Lose! Scissor beats Paper"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    rounds++;
    computerScore++;
    return "You Lose! Rock beats Scissor"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    rounds++;
    playerScore++;
    return "You Win! Scissor beats Paper"
  }
  else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
    rounds++;
    return "It's a tie!"
  }
  else {
    return "Please choose a valid weapon!"
  }
}

function getResult() {
  if (playerScore === 5 && computerScore <= 4) {
    return "Player Wins!"
  }
  else if (computerScore === 5 && playerScore <= 4) {
    return "Computer Wins!"
  }
  else {
    rounds++;
  }
}

function game() {
  for (let i = 0; i < 15; i++) {
    const playerSelection = prompt("Choose your weapon (Rock, Paper, Scissor)" );
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    console.log(getResult());
  }
}

game();*/