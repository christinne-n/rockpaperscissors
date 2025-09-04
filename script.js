let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomChoice = Math.random();
  
    if (randomChoice < 0.33) 
    {
      return "rock";
    } 
    else if (randomChoice < 0.66) 
    {
      return "paper";
    } 
    else 
    {
      return "scissors";
    }
  }

  function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");
    const winnerDiv = document.getElementById("winner");
    
    if(humanChoice === computerChoice){
      resultsDiv.textContent = `Tie! You both chose ${humanChoice}.`;    
    }
    else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      }
    else{
      computerScore++;
      resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      winnerDiv.textContent =
        humanScore === 5 ? "You win!" : "Computer wins!";
      disableButtons();
    }
  }

  function disableButtons() {
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }

  document.querySelector(".rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  document.querySelector(".paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  document.querySelector(".scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });