let playerScore = 0;
let cpuScore = 0;

for (let i = 0; i < 5; i++) {
    if (playerScore == 3 || cpuScore == 3) {
        if (playerScore > cpuScore) {
            console.log("Player won the game!");
            break;
        } else {
            console.log("CPU won the game!");
            break;
        }
    } else {
        playRound();
    }
}


function playRound() {
    let cpuChoice = getComputerChoice();
    console.log("CPU CHOOSE: " + cpuChoice);
    switch (getHumanChoise()) {
        case "rock":
            if (cpuChoice == "rock") {
                console.log("Draw");
            } else if (cpuChoice == "scizor") {
                console.log("Player Wins");
                playerScore++;
            } else {
                console.log("Player lose");
                cpuScore++;
            }
            break;
        case "scizor":
            if (cpuChoice == "rock") {
                console.log("Player lose");
                cpuScore++;
            } else if (cpuChoice == "scizor") {
                console.log("Draw");
            } else {
                console.log("Player Wins");
                playerScore++;
            }
            break;
        case "paper":
            if (cpuChoice == "rock") {
                console.log("Player Wins");
                playerScore++;
            } else if (cpuChoice == "scizor") {
                console.log("Player Lose");
                cpuScore++;
            } else {
                console.log("draw");
            }
            break;
    }
}


function getComputerChoice() {
    const cpuChoice = Math.floor(Math.random() * 3) + 1;
    switch (cpuChoice) {
        case 1:
            return "rock";

        case 2:
            return "scizor";

        case 3:
            return "paper";
    }
}

function getHumanChoise() {
    let userInput;
    const validOptions = ["rock", "scizor", "paper"];
    do {
        userInput = prompt("Please select an option (rock, scizor, paper): ").toLowerCase();
        if (!validOptions.includes(userInput)) {
            alert("Entrada invalida");
        }
    } while (!validOptions.includes(userInput));
    return userInput;
}
