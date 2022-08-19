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

function play(playerSelection, computerSelection){

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
        return "You win! Paper beats Rock"
    }
    else if(a == "paper" && b == "scissors") {
        return "You lost! Scissors beat Paper"
    }
    else if(a == "scissors" && b == "rock") {
        return "You lost! Rock beats Scissors"
    }
    else if(a == "scissors" && b == "paper") {
        return "You win! Scissors beat Paper"
    }
    else {
        return "You did not enter a valid choice. >:("
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        let choice = prompt("What's your choice? Rock? Paper? Scissors?")
        console.log(play(choice, getComputerChoice()))
    }
}

game()