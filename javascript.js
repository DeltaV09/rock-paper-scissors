function getComputerChoice () {
    const ranNumber = Math.floor(Math.random()*3 + 1);  //generates a random integer from 1 to 3
    console.log(ranNumber);
    switch (ranNumber) {                               //returns Rock/Paper/Scissors based on ranNumber
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//listens for user to make their selection
const playerChoice = document.querySelector(".play-area");

playerChoice.addEventListener('click',(event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break
        case 'scissors':
            playRound('scissors');
            break
    }
});


// plays round when user makes their selection, declares winner when score of 5 is reached
function playRound (humanChoice) {
            let computerChoice = getComputerChoice();
                                  //plays one round
            const humanScore = document.querySelector('#player-score');
            let currentHumanScore = parseInt(humanScore.textContent);
            const computerScore = document.querySelector('#computer-score');
            let currentComputerScore = parseInt(computerScore.textContent);

            if (humanChoice === "rock" && computerChoice === "paper") {         //evaluates winner of round, increments score
                alert("You lose! Paper beats Rock!");
                currentComputerScore++;
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                alert("You win! Rock beats Scissors!");
                currentHumanScore++;
            }  
            else if (humanChoice === "paper" && computerChoice === "rock") {
                alert("You win! Paper beats Rock!");
                currentHumanScore++;
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                alert("You lose! Scissors beats Paper!");
                currentComputerScore++;
            }
            else if (humanChoice === "scissors" && computerChoice === "rock") {
                alert("You lose! Rock beats Scissors!");
                currentComputerScore++;
            }
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                alert("You win! Scissors beat Paper!");
                currentHumanScore++;
            }
            else {
                alert("Tie!");
            }

            humanScore.textContent = currentHumanScore;
            computerScore.textContent = currentComputerScore;

            if (currentHumanScore == 5) {
                alert(`Congratulations! You are the winner!  Final score was You: ${currentHumanScore} to Computer: ${currentComputerScore}`);
                humanScore.textContent = 0;
                computerScore.textContent = 0;
            }
            else if (currentComputerScore == 5) {
                alert(`Sorry, better luck next time! Final score was You: ${currentHumanScore} to Computer: ${currentComputerScore}`);
                humanScore.textContent = 0;
                computerScore.textContent = 0;
            }

        }

