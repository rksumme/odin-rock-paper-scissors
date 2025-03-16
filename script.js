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

let message = prompt("rock, paper, or scissors?");
let answer;

//  Gets human answer to rock/paper/scissors
function getHumanChoice(choice){
    switch(choice) {
        case "rock":
            answer = "rock";
            break;
        case "paper":
            answer ="paper";
            break;
        case "scissors":
            answer = "scissors";
            break;
    }
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);