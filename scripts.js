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

function playGame() {

  // Variables to keep track of the scores
  let computerScore = 0;
  let humanScore = 0;

  // Function to play one round of rock, paper, scissors
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
  } else if (computerChoice.toLowerCase() === humanChoice) {
    console.log("It's a tie! You both chose " + computerChoice)
  } else {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore ++;
  }
  }

  // For loop to call the playRound function five times
  for(let i = 1; i <= 5; i ++) {
    // Variables to get random selections each time the playRound function is called
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
  if (computerScore > humanScore) {
    console.log(`Sorry, you loose! The computer finished with ${computerScore}, while you only had ${humanScore}.`)
  } else {
    console.log(`Congratulations, you won! You finished with ${humanScore}, while the computer only had ${computerScore}.`)
  }
}

playGame();