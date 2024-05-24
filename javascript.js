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
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;             //return player choice if valid
    }
    else {
        return "invalid input";         //return "invalid input" if player does not enter rock, paper, or scissors
    }

}

let test = getHumanChoice();
console.log(test);

