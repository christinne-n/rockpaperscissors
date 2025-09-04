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
    const rock = document.querySelector(".rock");
    rock.addEventListener("click", () => {return "rock";});
    const paper = document.querySelector(".paper");
    rock.addEventListener("click", () => {return "paper";});
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click", () => {return "scissors";});
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
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);