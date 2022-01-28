const playerName = prompt('What\'s your name?');
let options = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;

function game() {

    function playerSelection() {
        this.sensitiveCase = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        return sensitiveCase(prompt(`What's your choice ${playerName} ?`));
    }

    const playerPlay = playerSelection().toString();

    function computerSelection(options) {
        return options[Math.floor(Math.random() * options.length)]
    }

    const computerPlay = computerSelection(options).toString();

    function checkWinner(a, b) {
        if (a === b) {
            console.log('It\'s a tie!');
        } else if (a === "Rock" && b === "Scissors") {
            playerScore += 1;
            console.log('You win. Rock crushes the scissors.');
        } else if (a === "Rock" && b === "Paper") {
            computerScore += 1;
            console.log('You loose. Paper wraps the rock.');
        } else if (a === "Scissors" && b === "Rock") {
            computerScore += 1;
            console.log('You loose. Rock crushes the scissors.');
        } else if (a === "Scissors" && b === "Paper") {
            playerScore += 1;
            console.log('You win. Scissors cut the paper.');
        } else if (a === "Paper" && b === "Rock") {
            playerScore += 1;
            console.log('You win. Paper wraps the rock.');
        } else if (a === "Paper" && b === "Scissors") {
            computerScore += 1;
            console.log('You loose. Scissors cut the paper.');
        }
    }
    console.log('========New Round========');
    checkWinner(playerPlay, computerPlay);
    console.log(`${playerName} : ${playerPlay}`);
    console.log(`Computer : ${computerPlay}`);
    console.log('*************************');
    console.log(`Computer's score : ${computerScore}`);
    console.log(`${playerName}'s score : ${playerScore}`);
}

// Call functions
const playToScore = 3
while (playerScore !== playToScore && computerScore !== playToScore) {
    game()
}
if (playerScore === playToScore) {
    console.log(`${playerName} won with score`, playerScore)
} else if (computerScore === playToScore) {
    console.log('Computer won with score', computerScore)
}