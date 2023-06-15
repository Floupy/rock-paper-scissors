"use strict";


let availableChoices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let gameRounds = parseInt(prompt("How many rounds do you want to play?", "5"));

prompt()
function getComputerChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    playerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === "Rock" && computerChoice === "Rock" || playerChoice === "Paper" && computerChoice === "Paper" || playerChoice === "Scissors" && computerChoice === "Scissors") {

        return (`Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`);
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper") {
        return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Player Wins!`);

    }
    else if(playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Rock") {
        return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Computer Wins!`);
    }
    else {
        console.log("Error!");
    }
}

function game() {
    let rounds = Number(gameRounds);
    for(let i = 0; i < rounds; i++) {
        return playRound(playerChoice, computerChoice);
    }
}

computerChoice = getComputerChoice();
playerChoice = getPlayerChoice();

console.log(game());