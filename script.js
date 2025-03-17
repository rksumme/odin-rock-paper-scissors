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

function playRound(human, computer){
    if (human === computer) {
        return alert("It's a tie! No points awarded");
    } else if (human === 'rock' && computer === 'paper') {
        computerScore++;
        return alert("You lose! Paper beats rock");
    } else if (human === 'rock' && computer === 'scissors') {
        humanScore++;
        return alert("You win! Rock beats paper");
    } else if (human === 'paper' && computer === 'rock') {
        humanScore++;
        return alert("You win! Paper beats rock");
    } else if (human === 'paper' && computer === 'scissors') {
        computerScore++;
        return alert("You lose! Scissors beats paper");
    } else if (human === 'scissors' && computer === 'rock') {
        computerScore++;
        return alert("You lose! Rock beats scissors");
    } else if (human === 'scissors' && computer === 'paper') {
        humanScore++;
        return alert('You win! Scissors beats paper');
    }
}

function checkWinner() {
    if (humanScore >= 5) {
        alert("Congratulations! You've won the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Computer has won the game. Boo.");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function updateScore() {
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

const computerSelection = getComputerChoice();

const buttons = document.querySelectorAll("button");
const buttonsArray = Array.from(buttons);

buttonsArray.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.id;
        let lowerText = value.toLowerCase();
        playRound(lowerText, getComputerChoice());
        checkWinner();
        updateScore();
    });
});




