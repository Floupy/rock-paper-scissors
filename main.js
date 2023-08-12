"use strict";

// TODO overhaul the game logic, simplify code, make it more readable/compact

const availableChoices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let gameRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

let buttons = document.querySelectorAll('.buttons');
const button = document.querySelector('button');
const playRock = document.querySelector("#rock");
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const currentResult = document.querySelector('.currentResult');
const clearButton = document.querySelector('.clear');
const playButton = document.querySelector('.play-button');



function getComputerChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}


playRock.addEventListener('click', () => {
    playerChoice = "rock";
    // console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});
playPaper.addEventListener('click', () => {
    playerChoice = "paper";
    // console.log(playerChoice);
    playRound(playerChoice, computerChoice);
})
playScissors.addEventListener('click', () => {
    playerChoice = "scissors";
    // console.log(playerChoice);
    playRound(playerChoice, computerChoice);

});
function playRound(playerChoice, computerChoice) {
    console.log(currentRound + ' ' + gameRounds + ' ' + computerScore + ' ' + playerScore);
    getComputerChoice();
    // gameRounds++;

        /* Draw */
        if(playerChoice === "rock" && computerChoice === "Rock" ||
            playerChoice === "paper" && computerChoice === "Paper" ||
            playerChoice === "scissors" && computerChoice === "Scissors") {
            currentRound += 1;
            draws++;
            // return (`Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`);
            results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`;
            currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;

        }

        /* Player wins */
        else if (playerChoice === "rock" && computerChoice === "Scissors" ||
            playerChoice === "paper" && computerChoice === "Rock" ||
            playerChoice === "scissors" && computerChoice === "Paper") {
            playerScore += 1;
            currentRound += 1;
            console.log(playerScore);
            // return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Player Wins!`);
            results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Player Wins!`;
            currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;

        }

        /* Computer wins */
        else if(playerChoice === "rock" && computerChoice === "Paper" ||
            playerChoice === "paper" && computerChoice === "Scissors" ||
            playerChoice === "scissors" && computerChoice === "Rock") {
            computerScore += 1 ;
            currentRound += 1;
            // return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Computer Wins!`);
            results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Computer Wins!`;
            currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;

        }
        else {
            console.log("Error!");
            results.textContent = "Error!";
        }


        if(computerScore === 5 || playerScore === 5) {
            playRock.disabled = true;
            playScissors.disabled = true;
            playPaper.disabled = true;
            results.textContent = announceGameWinner() + (` Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`);

        }


}
clearButton.addEventListener('click', () => {
    results.textContent = " ";
    gameRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
    currentRound = 0;
    computerScore = 0;
    playerScore = 0;

    playRock.disabled = false;
    playScissors.disabled = false;
    playPaper.disabled = false;
})


function announceGameWinner() {
    if (playerScore > computerScore) {
        return ("The player wins!");
    } else if (playerScore < computerScore) {
        return ("The computer wins!");
    } else if (playerScore === computerScore) {
        return ("It's a draw!")
    }
}
