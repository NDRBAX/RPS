// let playerName = prompt('What\'s your name?');

let playerName = 'John';
let computerScore = 0;
let playerScore = 0;



function game() {

    let options = ['Rock', 'Paper', 'Scissors'];

    function computerSelection(options) {
        return options[Math.floor(Math.random() * options.length)];
    }
    console.log(computerSelection(options));

    function playerSelection() {
        return prompt(`What's your choice ${playerName} ?`);
    }
    console.log(playerSelection());

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
}



game();