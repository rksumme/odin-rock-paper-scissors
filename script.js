let humanScore = 0;
let computerScore = 0;

//  Gets an automated answer to rock/paper/scissors
function getComputerChoice(){
    value = Math.random()

    if (value <= 0.33) {
        return "rock";
    } else if (value >= 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

//  Gets human answer to rock/paper/scissors
function getHumanChoice(){
    let message = prompt("rock, paper, or scissors?");
    let lowerText = message.toLowerCase();
    return lowerText;

}

function playRound(human, computer){
    if (human === computer) {
        return console.log("It's a tie! No points awarded");
    } else if (human === 'rock' && computer === 'paper') {
        computerScore++;
        return console.log("You lose! Paper beats rock");
    } else if (human === 'rock' && computer === 'scissors') {
        humanScore++;
        return console.log("You win! Rock beats paper");
    } else if (human === 'paper' && computer === 'rock') {
        humanScore++;
        return console.log("You win! Paper beats rock");
    } else if (human === 'paper' && computer === 'scissors') {
        computerScore++;
        return console.log("You lose! Scissors beats paper");
    } else if (human === 'scissors' && computer === 'rock') {
        computerScore++;
        return console.log("You lose! Rock beats scissors");
    } else if (human === 'scissors' && computer === 'paper') {
        humanScore++;
        return console.log('You win! Scissors beats paper');
    }
}

const computerSelection = getComputerChoice();

function playGame(){
    for (let i = 0; i < 5; i++) {
        // Get player answer
        let answer = getHumanChoice();
        const humanSelection = answer;

        // Get computer answer
        const computerSelection = getComputerChoice();

        // Determine a winner and increment score
        playRound(humanSelection, computerSelection);
    }
}


function scoreGame(human, computer){
    if (human > computer) {
        console.log(`Congratulations! You win! Your score was ${human} and the computer scored ${computer}.`);
    } else if (human < computer) {
        console.log(`Boo. You lose. Your score was ${human} and the computer's score was ${computer}`);
    } else if (human === computer) {
        console.log(`It's a tie! Too bad. Oh well.`)
    }
}

playGame();
scoreGame(humanScore, computerScore);


