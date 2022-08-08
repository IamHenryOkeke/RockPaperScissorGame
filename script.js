const mainContainer = document.querySelector(".main-container")

const container = document.querySelector(".container")

const body = document.querySelector("body")

const head = document.createElement('h1');

const para1 = document.createElement("p");

const para2 = document.createElement("p");

const result = document.getElementById("result");

const score = document.getElementById("score");

const buttons = document.querySelectorAll('button');

const newGameBtn = document.getElementById('restart-game')

body.setAttribute("style", "background-color: grey;max-width: 500px;margin: auto; color:white;");

head.classList.add('head');
head.textContent = "Rock Paper Scissors Game"
container.appendChild(head);

para1.classList.add('para1');
para1.textContent = 'Pick your selection below via the button to play against the computer.'
container.appendChild(para1);

para2.classList.add('para2');
para2.innerHTML = 'Dear Nigerian Student, Get to five first to beat the computer. The fate of ASUU strike is in your hands. Just kidding &#129315	'
container.appendChild(para2);

let playerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let myArray = ["rock", "paper", "scissors"];
    let number = Math.floor((Math.random() * myArray.length));
    return myArray[number];
}

function stopPlay() {
    buttons.forEach(btn => {
        btn.disabled = true
    })
}

function playRound(playerSelection){
    let computerSelection = computerPlay()
    let message;
    if (computerSelection === playerSelection){
        message = `It's a draw. You both chose ${playerSelection}`; 
        result.textContent = message;
        mainContainer.appendChild(result);
        score.textContent = (`Score: Player ${playerScore} - ${computerScore} Computer`) 
    }
    else if (computerSelection === "rock" && playerSelection === "paper" || 
        computerSelection === "paper" && playerSelection === "scissors" || 
        computerSelection === "scissors" && playerSelection === "rock"){
        message = `The computer chose ${computerSelection} \nYou win.`; 
        playerScore++; 
        result.textContent = message;
        mainContainer.appendChild(result);
        score.textContent = (`Score: Player ${playerScore} - ${computerScore} Computer`);
        if (playerScore === 5) {
            result.innerText = 'You got to five first.You won the game! &#129327. Reload the page to play again'
            stopPlay();
            newGameBtn.style.display = 'inline-block';
        } 
    }
    else{
        message = `The computer chose ${computerSelection} \nYou lose.`; 
        computerScore++;
        result.textContent = message;
        mainContainer.appendChild(result);
        score.textContent = (`Score: Player ${playerScore} - ${computerScore} Computer`);
        if (computerScore === 5) {
            result.innerText = 'The Computer got to five first.You lose! &#128541. Reload the page to play again'
            stopPlay();
            newGameBtn.style.display = 'inline-block';
        } 
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        playRound(playerSelection);
    });
});

newGameBtn.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    score.textContent = ''
    result.textContent = ''
    buttons.forEach(btn => {
        btn.disabled = false
    })
    newGameBtn.style.display = 'none'
})
