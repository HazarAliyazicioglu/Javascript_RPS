const initGame = () => {
    const startGame = confirm("Do you want to play game ?");
    startGame ? playGame() : alert("Next time than :)"); 
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;;
        }
        if (!playerChoice) {
            decidedToNotPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice)
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice)
        displayResult(result)
        if (askToPlayAgain()) {
            continue;
        }else{
            thanksForPlaying();
            break;
        }
    } 
}

const getPlayerChoice = () => {
   return prompt("Please enter rock, paper or scissors");
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    }else{
        return false
    }
}    

const decidedToNotPlay = () => {
    alert("I guess you changed your mind. HAve a good time")
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, scissors")
}

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" || 
        playerChoice === "scissors" || 
        playerChoice === "paper"){
        return playerChoice;
    } else{
        return false
    }
}

const getComputerChoice = () => {
    computer = ["rock" , "paper", "scissors"]
    computerSelection = computer[Math.floor(Math.random() * computer.length)]
    return computerSelection
}

const determineWinner = (player,computer) => {
    const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `Player One: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "paper" && computer === "scissors"
      ? `Player One: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "scissors" && computer === "rock"
      ? `Player One: ${player}\nComputer: ${computer}\nComputer Wins!`
      : `Player One: ${player}\nComputer: ${computer}\nPlayer One Wins!`;

  return winner;
}

const displayResult = (result) => {
    alert(result);
};
  
const askToPlayAgain = () => {
    return confirm("Play Again?");
};
  
const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};
  

initGame()