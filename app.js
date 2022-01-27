// let playerName = prompt('What\'s your name?');

let playerName = 'John';
let computerScore = 0;
let playerScore = 0;
let options = ['Rock', 'Paper', 'Scissors'];

function game() {
    let playerChoice;
    let computerChoice;
    this.computerSelection = function(options) {
        computerChoice = options[Math.floor(Math.random() * options.length)];
    };
    this.playerSelection = function() {
        playerChoice = prompt(`What's your choice ${playerName} ?`);
    };
    console.log(computerChoice);
    console.log(playerChoice);
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        console.log('You loose. Rock crushes the scissors and wins.');
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        console.log('You loose. Paper wraps the stone and wins.');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log('You loose. Scissors cut the paper and win.');
    } else {
        console.log('Tie. Try again !');
        return game();
    }
}