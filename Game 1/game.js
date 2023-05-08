let playGame = confirm("Do you want to play a game?")
if (playGame) {
    
    let playerChoice = prompt("Make a choice : rock paper or scissors");
    
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "scissors" || playerOne === "paper") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;
            if (playerOne === computer) {
                alert("Draw")
            } else if (playerOne === "rock" &&  computer === "paper") {
                alert("You lost");
            } else if (playerOne === "rock" &&  computer === "scissors") {
                alert("You won");
            } else if (playerOne === "paper" &&  computer === "rock") {
                alert("You won");
            } else if (playerOne === "paper" &&  computer === "scissors") {
                alert("You lost");
            } else if (playerOne === "scissors" &&  computer === "paper") {
                alert("You won");
            } else {
                alert("You lost");
            }
        }else{
            alert("You didn't write rock paper or scissors");
        }
    }else{
        alert("I guess ypu changed your mind. Maybe next time");
    }

}else{
    alert("Next time than.")
}