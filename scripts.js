const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner');

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

function welcomeMessage() {
  alert("Welcome to Rock, Paper, Scissors. Begin by selecting your option below. First to five points wins!");
}

function playGame() {

  welcomeMessage();

  // Variables to keep track of the scores
  let computerScore = 0;
  let humanScore = 0;

  human.textContent = humanScore;
  computer.textContent = computerScore;

  rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound(computerSelection, "rock")
  })

  paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound(computerSelection, "paper")
  })

  scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound(computerSelection, "scissors")
  })

  // Function to play one round of rock, paper, scissors
  function playRound(computerChoice, humanChoice) {

    if (computerChoice === "Rock" && humanChoice === "scissors") {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      computerScore ++;
      computer.textContent = computerScore;
    } else if (computerChoice === "Paper" && humanChoice === "rock") {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      computerScore ++;
      computer.textContent = computerScore;
    } else if (computerChoice === "Scissors" && humanChoice === "paper") {
      console.log("You lose! " + computerChoice + " beats " + humanChoice)
      computerScore ++;
      computer.textContent = computerScore;
    } else if (computerChoice.toLowerCase() === humanChoice) {
      console.log("It's a tie! You both chose " + computerChoice)
    } else {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore ++;
      human.textContent = humanScore;
    }

    // If statements to end the game when one player reaches five points
    if (computerScore === 5) {

      console.log(`Sorry, you loose! The computer finished with ${computerScore}, while you only had ${humanScore}.`);
      computer.classList.add('red');
      winner.textContent = 'Computer Wins...'
    } 
    
    if (humanScore === 5) {
      console.log(`Congratulations, you won! You finished with ${humanScore}, while the computer only had ${computerScore}.`)
      human.classList.add('green');
      winner.textContent = 'You Win!'
    } 
  }
}

playGame();