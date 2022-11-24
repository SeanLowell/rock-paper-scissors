//randomly pick a choice for the computer
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice);
}
getComputerChoice();