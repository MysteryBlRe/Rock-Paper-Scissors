function getComputerChoice(){
    let choice
    choice = Math.floor(Math.random() * 3) + 1
    if(choice == 1)
        return "rock"
    else if(choice == 2)
        return "paper"
    else if(choice == 3)
        return "scissors"
}

function playRound(playerSelection, computerSelection){

    let a = ''
    let b = ''
    b = computerSelection
    a = playerSelection
    a.toLowerCase()
    if (a == b){
        return "Tie!"
    }
    else if(a == "rock" && b == "scissors") {
        return "You won! Rock beats Scissors"
    }
    else if(a == "rock" && b == "paper") {
        return "You lost! Paper beats Rock"
    }
    else if(a == "paper" && b == "rock") {
        return "You won! Paper beats Rock"
    }
    else if(a == "paper" && b == "scissors") {
        return "You lost! Scissors beat Paper"
    }
    else if(a == "scissors" && b == "rock") {
        return "You lost! Rock beats Scissors"
    }
    else if(a == "scissors" && b == "paper") {
        return "You won! Scissors beat Paper"
    }
    else {
        return "You did not enter a valid choice. >:("
    }
}

function game(e){
    if(playerScore == 5 || computerScore == 5){
        playerScore = 0;
        computerScore = 0;
    }

    let result
    result = playRound(e.target.id, getComputerChoice())

    if(result.includes("You won!"))
        playerScore++
    else if(result.includes("You lost!"))
        computerScore++
    
    console.log(playerScore)
    console.log(computerScore)

    score.textContent = "You: " + playerScore + " Computer: " + computerScore

    if(playerScore == 5){
        results.textContent = "You won the game!"
    }
    else if(computerScore == 5){
        results.textContent = "You lost the game!"
    }
    else{
        results.textContent = result
    }
}

const buttons = document.querySelectorAll('.buttons button');
const score = document.createElement('div')
const results = document.createElement('div')
document.body.appendChild(score)
document.body.appendChild(results)
let playerScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        game(e);
    })
});