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
    const playerAnswer = prompt("Choose rock(r), paper(p) or scissors(s).").toLowerCase();
    if(playerAnswer === "r") return "rock";
    if(playerAnswer === "p") return "paper";
    if(playerAnswer === "s") return "scissors";
  }
  function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    
    if(humanChoice === computerChoice){
      console.log(`It's a tie! Current score: You - ${humanScore} \n Computer - ${computerScore}`)
    }
    else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ) {
        humanScore++;
        console.log(`You win! Current score: You - ${humanScore} \n Computer - ${computerScore}`);
      }
    else{
      computerScore++;
      console.log(`You lose! Current score: You - ${humanScore} \n Computer - ${computerScore}`);
    }
  }
  for(let i =0 ; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }