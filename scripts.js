let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random () * 3) + 1;
  if(randNum === 1) {
    return "Rock";
  } else if(randNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let ourChoice = prompt("Do you choose rock, paper, or scissors?: ")
  return ourChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "Rock" && humanChoice === "scissors") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore ++;
  } else if (computerChoice === "Paper" && humanChoice === "rock") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore ++;
  } else if (computerChoice === "Scissors" && humanChoice === "paper") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice)
    computerScore ++;
  } else if (computerChoice === humanChoice) {
    console.log("It's a tie! You both chose " + computerChoice)
  } else {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore ++;
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

