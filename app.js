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
        this.sensitiveCase = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        return sensitiveCase(prompt(`What's your choice ${playerName} ?`));
    }
    console.log(playerSelection());

    playRound(computerSelection, playerSelection);
    console.log('Player score : ' + playerScore + 'Computer score : ' + computerScore)

}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        console.log('You loose. Rock crushes the scissors.');
        computerScore++;
        return game();
    } else {
        console.log('You won. Rock crushes the scissors.');
        playerScore++;
        return game();
    };
    if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        console.log('You loose. Paper wraps the stone.');
        computerScore++;
        return game();
    } else {
        console.log('You won. Paper wraps the stone.');
        playerScore++;
        return game();
    };

    if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log('You loose. Scissors cut the paper.');
        computerScore++;
        return game();
    } else {
        console.log('You won. Scissors cut the paper.');
        playerScore++;
        return game();
    };

    if (computerSelection === playerSelection) {
        console.log('Tie. Try again !');
        return game();
    } else {
        console.log('Invalid. Try again !');
        return game();
    }

}