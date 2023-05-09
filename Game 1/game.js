let playGame = confirm("Do you want to play a game?")
if (playGame) {
    
    let playerChoice = prompt("Make a choice : rock paper or scissors");
    
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "scissors" || playerOne === "paper") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;
            if (playerOne === computer) {
                var result = "Draw"
            } else if (playerOne === "rock" &&  computer === "paper") {
                var result = "Lost"
                
            } else if (playerOne === "rock" &&  computer === "scissors") {
                var result = "Won"
                
            } else if (playerOne === "paper" &&  computer === "rock") {
                var result = "Won"
                
            } else if (playerOne === "paper" &&  computer === "scissors") {
                var result = "Lost"
                
            } else if (playerOne === "scissors" &&  computer === "paper") {
                var result = "Won"
                
            } else if (playerOne === "scissors" && computer ==="rock") {
                var result = "Lost"
            }
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert ("Ok, thanks for playing.");
        }else{
            alert("You didn't write rock paper or scissors");
        }
    }else{
        alert("I guess you changed your mind. Maybe next time");
    }

}else{
    alert("Next time than.")
}
