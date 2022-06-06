// this is a script for rock paper scissors game

// the function generates a number between 1 - 3 and returns either rock, paper or scissors value depending on the value
function computerPlay(){
    let number = Math.floor((Math.random() * 3) + 1);
    // generates an integer between 1 and 3
    let computerChoice;
    if (number === 1){
        computerChoice = "rock";
    }
    else if (number === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    // set computerChoice to either rock, paper or scissors value
    return computerChoice;
}

// this function compares the player input and the computerChoice to decide who won
function playRound(computerSelection, playerSelection){
    let message;
    if (computerSelection === playerSelection){
        message = `It's a draw. You both chose ${playerSelection}`;
        
    }
    else if (computerSelection === "rock" && playerSelection === "paper" || 
        computerSelection === "paper" && playerSelection === "scissors" || 
        computerSelection === "scissors" && playerSelection === "rock"){
        message = `The computer chose ${computerSelection} \nYou win. ${playerSelection} covers ${computerSelection}.`;
        
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"){
        message = `The computer chose ${computerSelection} \nYou lose. ${computerSelection} crushes ${playerSelection}.`;   
    }
    else{
        console.log("Wrong entry. Enter from the options provided");
    }
    return message;
}

//this function runs the game taking in playRound and ComputerPlay function
function game(){
    let computerScore = 0;
    let playerScore = 0;
    let winnerMessage;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = (prompt("Enter either rock,paper or scissors: ", "rock")).toLowerCase();
        let statement = playRound(computerSelection, playerSelection);
        if (statement.includes("win")){
            playerScore++;
            
        }
        else if (statement.includes("lose")){
            computerScore++;
        }
        else{
            console.log("Draw")
        }
        console.log(`${playerScore} - ${computerScore}`);
     }
     // displays the winner depending on the score
     if (playerScore > computerScore){
         winnerMessage = "After 5 rounds, You win";
     }
     else if (playerScore == computerScore){
         winnerMessage = "After 5 rounds, it was a draw"
     }
     else{
         winnerMessage = "After 5 rounds, You lose"
     }
     return console.log(winnerMessage);
}

// runs the game from the console
console.log(game())