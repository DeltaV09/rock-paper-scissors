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

function getHumanChoice () {        //get the Player's choice
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase();  //convert choice to lower case for comparison
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {  //only proceed when user makes valid input
        humanChoice = prompt("Invalid input! Please enter Rock, Paper, or Scissors!");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}



function playGame () {      //play Best of 5 (but ties don't count, so really play until someone has score of 3)
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore <3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === 3) {      //declare winner once someone has score of 3         
        alert("Congratulations! You are the winner!");
    }
    else if (computerScore === 3) {
        alert("Sorry, better luck next time!");
    }

    function playRound (humanChoice, computerChoice) {                      //plays one round
        if (humanChoice === "rock" && computerChoice === "paper") {         //evaluates winner of round, increments score
            alert("You lose! Paper beats Rock!");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            alert("You win! Rock beats Scissors!");
            humanScore++;
        }  
        else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("You win! Paper beats Rock!");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            alert("You lose! Scissors beats Paper!");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            alert("You lose! Rock beats Scissors!");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("You win! Scissors beat Paper!");
            humanScore++;
        }
        else {
            alert("Tie!");
        }
    }
}

playGame();



