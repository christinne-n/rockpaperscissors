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
  