let playerScore =0;
let computerScore = 0;

function computerPlay()
{   
    var computer = Math.floor(Math.random() * 3);
    if(computer == 0)
    {
        return "rock";
    } else if(computer == 1){
        return "paper";
    }else{
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase()
  //console.log("ici on est dans le playround")
  if(computerSelection == playerSelection)
  {
    return (computerSelection + " And " + playerSelection + " => Tie !")
  }
  else if((computerSelection == "paper" && playerSelection == "rock")||(computerSelection == "rock" && playerSelection == "scissors")||(computerSelection == "scissors" && playerSelection == "paper")) {
//    console.log("computerSelection = " + computerSelection)
//    console.log("playerSelection = " + playerSelection)
    computerScore = computerScore + 1;
    return ("You Lose! " + computerSelection + " beats " + playerSelection)
  }else
  {
 //   console.log("computerSelection = " + computerSelection)
 //   console.log("playerSelection = " + playerSelection)
    playerScore = playerScore + 1;
    return ("You Win! " + playerSelection + " beats " + computerSelection)
  }
}
function game()
{
  while(computerScore != 5 && playerScore !=5)
  {
    let playerEntry = prompt("Choose Rock, paper or Scissors")
    while(playerEntry.toLowerCase() != "rock" && playerEntry.toLowerCase() != "paper" && playerEntry.toLowerCase() != "scissors")
    {
      playerEntry = prompt("Use correct spelling Rock, paper or Scissors")
    }
   // console.log("ici on est dans le while et computerScore = " +computerScore + " playerScore = "+playerScore)
    console.log(playRound(playerEntry,computerPlay()))
    console.log("The score is : \n computer :" + computerScore + " you " + playerScore)
  }
  if(computerScore==5)
  {
    return ("You Lose ! " + computerScore + " to " + playerScore)
  }else{
    return ("You Win ! " + playerScore + " to " + computerScore)
  }
}

console.log(game())