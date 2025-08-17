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
  function getHumanChoice() {
    const playerAnswer = prompt("Choose rock(r), paper(p) or scissors(s).").lowercase;
    if(playerAnswer === "r") return "rock";
    if(playerAnswer === "p") return "paper";
    if(playerAnswer === "s") return "scissors";
  }
  function playRound(humanChoice, computerChoice) {
    console.log("You chose ${humanChoice}");
    console.log("Computer chose ${computerChoice}");
    
    if(humanChoice === computerChoice){
      console.log("It is a tie!")
    }
    else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ) {
        console.log("You win!");
        humanScore++;
      }
    else{
      console.log("You lose!");
      computerScore++;
    }
  }
  
  