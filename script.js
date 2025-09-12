let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomChoice = Math.random();

  if (randomChoice < 0.33) 
  {
    return "ROCK";
  } 
  else if (randomChoice < 0.66) 
  {
    return "PAPER";
  } 
  else 
  {
    return "SCISSORS";
  }
}

function playRound(humanChoice, computerChoice) {
  const results = document.getElementById("results");
  const score = document.getElementById("score");
  const winner = document.getElementById("winner");
  const restart = document.getElementById("restart");
  
  if(humanChoice === computerChoice){
    results.textContent = `Tie! You both chose ${humanChoice}.`;    
  }
  else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER") ) {
      humanScore++;
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
  else{
    computerScore++;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    winner.textContent =
      humanScore === 5 ? "You win!" : "Computer wins!";
    disableButtons();
    restart.style.display = "inline-block"; 
  }
}

function disableButtons() {
  document.querySelector(".rock").disabled = true;
  document.querySelector(".paper").disabled = true;
  document.querySelector(".scissors").disabled = true;
}
function enableButtons() {
  document.querySelector(".rock").disabled = false;
  document.querySelector(".paper").disabled = false;
  document.querySelector(".scissors").disabled = false;
}

document.querySelector(".rock").addEventListener("click", () => {
  playRound("ROCK", getComputerChoice());
});
document.querySelector(".paper").addEventListener("click", () => {
  playRound("PAPER", getComputerChoice());
});
document.querySelector(".scissors").addEventListener("click", () => {
  playRound("SCISSORS", getComputerChoice());
});

document.getElementById("restart").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("results").textContent = "";
  document.getElementById("score").textContent = "You: 0 | Computer: 0";
  document.getElementById("winner").textContent = "";
  document.getElementById("restart").style.display = "none";
  enableButtons();
});