const container = document.querySelector(".container")

const body = document.querySelector("body")

const head = document.createElement('h1');

const para = document.createElement("p");

const btnRock = document.createElement("button");

const btnScissors = document.createElement("button");

const btnPaper = document.createElement("button");

const content = document.querySelector('#result');

const result = document.createElement("div")

const resultPlay = document.createElement("div")

const buttons = document.querySelectorAll("button")



head.classList.add('head');
head.textContent = "Rock Paper Scissors Game"
container.appendChild(head);

para.classList.add('para');
para.textContent = 'Pick your selection below via the button to play against the computer.\n' + 'The first to get to five wins. Goodluck to you!'
container.appendChild(para);

btnRock.classList.add('buttonRock');
btnRock.textContent = "Rock"
btnRock.setAttribute('style', 'margin-right: 10px; padding: 8px 15px;background-color: red; border-radius: 10px;');
btnRock.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = "rock";
    result.classList.add('result');
    result.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(result);
  });
container.appendChild(btnRock);

btnScissors.classList.add('buttonScissors');
btnScissors.textContent = "Scissors"
btnScissors.setAttribute('style', 'margin-right: 10px; padding: 8px 15px;background-color: yellow; border-radius: 10px;');
btnScissors.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = "scissors";
    result.classList.add('result');
    result.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(result);
  });
container.appendChild(btnScissors);

btnPaper.classList.add('buttonPaper');
btnPaper.textContent = "Paper"
btnPaper.setAttribute('style', 'margin-right: 10px; margin-bottom: 50px; padding: 8px 15px;background-color: green;border-radius: 10px;');
btnPaper.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = "paper";
    result.classList.add('result');
    result.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(result);
  });
container.appendChild(btnPaper);

body.setAttribute("style", "background-color: grey;max-width: 500px;margin: auto;");

function computerPlay(){
    let myArray = ["rock", "paper", "scissors"];
    let number = Math.floor((Math.random() * (myArray.length)) + 1);
    // generates an integer between 1 and 3
    let computerChoice;
    if (number === 1){
        computerChoice = myArray[0];
    }
    else if (number === 2){
        computerChoice = myArray[1];
    }
    else{
        computerChoice = myArray[2];
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
        message = `The computer chose ${computerSelection} \nYou win.`;
        
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"){
        message = `The computer chose ${computerSelection} \nYou lose.`;   
    }
    return message;
}

// this function runs the game taking in playRound and ComputerPlay function
function gamePlay(){
    let computerScore = 0;
    let playerScore = 0;
    let winnerMessage;
    let i = 0;
    while (playerScore !== 5 || computerScore !== 5) {
        let computerSelection = computerPlay();
        let playerSelection = (prompt("Enter either rock,paper or scissors: ", "rock")).toLowerCase();
        let statement = playRound(computerSelection, playerSelection);
        if (playerScore === 5 || computerScore === 5){
            break;
        } 
        
        else{
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
        i++;
     }
     // displays the winner depending on the score
     if (playerScore > computerScore){
         winnerMessage = "You win";
     }
     else if (playerScore == computerScore){
         winnerMessage = "It was a draw"
     }
     else{
         winnerMessage = "You lose"
     }
     return console.log(winnerMessage);
}

// runs the game from the console
// let computerSelection = computerPlay();
// // let playerSelection = (prompt("Enter either rock,paper or scissors: ", "rock")).toLowerCase();
// console.log(playRound(computerSelection, playerSelection));