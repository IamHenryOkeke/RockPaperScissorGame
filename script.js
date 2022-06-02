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
    if (computerSelection === (playerSelection.toLowerCase())){
    message =  console.log(`It's a draw. You both chose ${playerSelection}`)
    }
    else if (computerSelection === "rock" && (playerSelection.toLowerCase()) === "paper"){
        message =  console.log(`The computer chose ${computerSelection} \nYou win. ${playerSelection} covers ${computerSelection}.`)
    }
    else if (computerSelection === "rock" && (playerSelection.toLowerCase()) === "scissors"){
        message =  console.log(`The computer chose ${computerSelection} \nYou lose. ${computerSelection} crushes ${playerSelection}.`)
    }
    else if (computerSelection === "paper" && (playerSelection.toLowerCase()) === "rock"){
        message =  console.log(`The computer chose ${computerSelection} \nYou lose. ${computerSelection} covers ${playerSelection}.`)
    }
    else if (computerSelection === "paper" && (playerSelection.toLowerCase()) === "scissors"){
        message =  console.log(`The computer chose ${computerSelection} \nYou win. ${playerSelection} cuts ${computerSelection}.`)
    }
    else if (computerSelection === "scissors" && (playerSelection.toLowerCase()) === "paper"){
        message =  console.log(`The computer chose ${computerSelection} \nYou lose. ${computerSelection} cuts ${playerSelection}.`)
    }
    else if (computerSelection === "scissors" && (playerSelection.toLowerCase()) === "rock"){
        message =  console.log(`The computer chose ${computerSelection} \nYou win. ${playerSelection} crushes ${computerSelection}.`)
    }
    else{
        console.log("Wrong entry. Enter from the options provided")
    }
    return message;
}

const computerSelection = computerPlay();
// console.log(computerSelection)
let playerSelection = (prompt("Enter either rock,paper or scissors: ", "rock"));
// console.log(playerSelection);
console.log(playRound(computerSelection,playerSelection))