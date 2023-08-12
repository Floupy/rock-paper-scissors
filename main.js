"use strict";

// TODO overhaul the game logic, simplify code, make it more readable/compact

const availableChoices = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let gameRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.buttons');
const button = document.querySelector('button');
const playRock = document.querySelector("#rock");
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const clearButton = document.querySelector('.clear');
const playButton = document.querySelector('.play-button');


/*buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        return e.target.id;
    })
});*/




function getComputerChoice() {
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}


function getPlayerChoice() {
    // let playerChoicePrompt = prompt("What move would you like to make? \nAvailable options: Rock | Paper | Scissors");

    /*playerChoice = playerChoicePrompt.charAt(0).toUpperCase() + playerChoicePrompt.slice(1);
    return playerChoice;*/

    console.log(playerChoice);
    return playerChoice;
}

/*
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
});
*/

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
playButton.addEventListener('click', playRound);
function playRound(playerChoice, computerChoice) {
    console.log(currentRound + ' ' + gameRounds + ' ' + computerScore + ' ' + playerScore);
    getComputerChoice();
    // gameRounds++;

        /* Draw */
        if(playerChoice === "rock" && computerChoice === "Rock" ||
            playerChoice === "paper" && computerChoice === "Paper" ||
            playerChoice === "scissors" && computerChoice === "Scissors") {
            currentRound += 1;
            // return (`Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`);
            results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Result: Draw!`;
            console.log(gameRounds);

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

        }

        /* Computer wins */
        else if(playerChoice === "rock" && computerChoice === "Paper" ||
            playerChoice === "paper" && computerChoice === "Scissors" ||
            playerChoice === "scissors" && computerChoice === "Rock") {
            computerScore += 1 ;
            currentRound += 1;
            // return (`Player choice: ${playerChoice}; \nComputer choice: ${computerChoice}; \n Result: Computer Wins!`);
            results.textContent = `Player choice: ${playerChoice}; \n Computer choice: ${computerChoice}; \n Computer Wins!`;

        }
        else {
            console.log("Error!");
            results.textContent = "Error!";
        }


        if(currentRound === gameRounds) {
            playRock.disabled = true;
            playScissors.disabled = true;
            playPaper.disabled = true;
            results.textContent = announceGameWinner() + (`Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${gameRounds - (playerScore + computerScore)}`);
            // results.textContent = announceGameWinner();
        }


    // console.log(playerChoice + " " + computerChoice)
    /* Draw */



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

playButton.addEventListener('click', playRound);



function announceGameWinner() {
    if (playerScore > computerScore) {
        return ("The player wins!");
    } else if (playerScore < computerScore) {
        return ("The computer wins!");
    } else if (playerScore === computerScore) {
        return ("It's a draw!")
    }
}

function game() {

    playRound();

    if(playerScore === 5) {
        results.textContent = (`Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${gameRounds - (playerScore + computerScore)}`);
        results.textContent = announceGameWinner();
    }

    /*for(let i = 0; i < gameRounds; i++) {
        
        getPlayerChoice();
        getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));

        if(i === gameRounds - 1) {
            console.log(`Player wins: ${playerScore}; Computer wins: ${computerScore}; Draws: ${gameRounds - (playerScore + computerScore)}`);
            console.log(announceGameWinner());
        }
    }*/
}

game();

