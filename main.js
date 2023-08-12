"use strict";
/* TODO: overhaul the game logic, simplify code, make it more readable/compact
         first click of button when page is loaded does nothing
 */

const availableChoices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

const playRock = document.querySelector("#rock");
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const currentResult = document.querySelector('.currentResult');
const clearButton = document.querySelector('.clear');


/* Event Listeners */
playRock.addEventListener('click', () => {
    playerChoice = "Rock";
    playRound(playerChoice, computerChoice);
});
playPaper.addEventListener('click', () => {
    playerChoice = "Paper";
    playRound(playerChoice, computerChoice);
});
playScissors.addEventListener('click', () => {
    playerChoice = "Scissors";
    playRound(playerChoice, computerChoice);
});
clearButton.addEventListener('click', () => {
    resetGame();
});

function getComputerChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}
function playRound(playerChoice, computerChoice) {
    getComputerChoice();

    /* Draw */
    if(playerChoice === "Rock" && computerChoice === "Rock" ||
        playerChoice === "Paper" && computerChoice === "Paper" ||
        playerChoice === "Scissors" && computerChoice === "Scissors") {
        currentRound++;
        draws++;
        results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`;
        currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;
    }

    /* Player wins */
    else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        currentRound++;
        console.log(playerScore);
        results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Player Wins!`;
        currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;
    }

    /* Computer wins */
    else if(playerChoice === "Rock" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Scissors" ||
        playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        currentRound++;
        results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Computer Wins!`;
        currentResult.textContent = `Current results: Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`;
    }
    else {
        if(currentRound === 0) {
            results.textContent = ' ';
        }
        else {
            console.log("Error!");
            results.textContent = "Error!";
        }

    }

    if(computerScore === 5 || playerScore === 5) {
        playRock.disabled = true;
        playScissors.disabled = true;
        playPaper.disabled = true;
        results.textContent = announceGameWinner() + (` Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${draws}`);
    }
}

function resetGame(){
    results.textContent = " ";
    currentResult.textContent = ' ';
    currentRound = 0;
    computerScore = 0;
    playerScore = 0;
    draws = 0;
    playRock.disabled = false;
    playScissors.disabled = false;
    playPaper.disabled = false;
}

function announceGameWinner() {
    if (playerScore > computerScore) {
        return ("The player wins!");
    } else if (playerScore < computerScore) {
        return ("The computer wins!");
    } else if (playerScore === computerScore) {
        return ("It's a draw!")
    }
}
