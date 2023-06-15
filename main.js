"use strict";

let availableChoices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let gameRounds = parseInt(prompt("How many rounds do you want to play?", "5"));

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoicePrompt = prompt("What move would you like to make? \nAvailable options: Rock | Paper | Scissors");

    playerChoice = playerChoicePrompt.charAt(0).toUpperCase() + playerChoicePrompt.slice(1);
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {

    /* Draw */
    if(playerChoice === "Rock" && computerChoice === "Rock" || playerChoice === "Paper" && computerChoice === "Paper" || playerChoice === "Scissors" && computerChoice === "Scissors") {

        return (`Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`);
    }

    /* Player wins */
    else if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Player Wins!`);

    }

    /* Computer wins */
    else if(playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Computer Wins!`);
    }
    else {
        console.log("Error!");
    }
}

function game() {

    for(let i = 0; i < gameRounds; i++) {
        getPlayerChoice();
        getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if(i === gameRounds - 1) {
            console.log(`Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${gameRounds - (playerScore + computerScore)}`);
        }
    }
}

game();