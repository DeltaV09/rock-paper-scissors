function getComputerChoice () {
    const ranNumber = Math.floor(Math.random()*3 + 1);  //generates a random integer from 1 to 3
    console.log(ranNumber);
    switch (ranNumber) {                               //returns Rock/Paper/Scissors based on ranNumber
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

let test = getComputerChoice();
console.log(test);


