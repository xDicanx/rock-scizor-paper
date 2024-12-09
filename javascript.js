// Variables globales para las puntuaciones
let playerScore = 0;
let cpuScore = 0;

// Selecciona los botones de las opciones del jugador y asigna eventos
const playerOptionsAll = document.querySelectorAll(".playerOptions button");

playerOptionsAll.forEach((button) => {
    // Cada botón inicia una ronda con la opción seleccionada
    button.addEventListener("click", () => playRound(button.textContent.toLocaleLowerCase()));
});

/**
 * Juega una ronda del juego.
 * @param {string} playerOption - Elección del jugador ('rock', 'scizors', 'paper').
 */
function playRound(playerOption) {
    const cpuChoice = getComputerChoice();
    console.log("CPU CHOOSE: " + cpuChoice);
    switch (playerOption) {
        case "rock":
            if (cpuChoice == "rock") {
                console.log("Draw");
            } else if (cpuChoice == "scizors") {
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
            } else if (cpuChoice == "scizors") {
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
            } else if (cpuChoice == "scizors") {
                console.log("Player Lose");
                cpuScore++;
            } else {
                console.log("draw");
            }
            break;
    }

    updateUiScore(); // Refleja los cambios en la UI
}

/**
 * Actualiza la interfaz con los puntajes actuales.
 */
function updateUiScore() {
    const playerScoreUi = document.querySelector(".playerScore p");
    const cpuScoreUi = document.querySelector(".cpuScore p");
    playerScoreUi.textContent = playerScore;
    cpuScoreUi.textContent = cpuScore;
}

/**
 * Genera una elección aleatoria para la CPU.
 * @returns {string} 'rock', 'scizors', o 'paper'.
 */
function getComputerChoice() {
    const cpuOptionsAll = document.querySelectorAll(".cpuSelection button");
    const cpuChoice = Math.floor(Math.random() * 3) + 1;
    switch (cpuChoice) {
        case 1:
            changeColorOfCpuSelectionButton(cpuOptionsAll, "rock");
             return "rock";
        case 2: 
            changeColorOfCpuSelectionButton(cpuOptionsAll, "scizors");
            return "scizors";
        case 3: 
            changeColorOfCpuSelectionButton(cpuOptionsAll, "paper");
            return "paper";
    }
}

function changeColorOfCpuSelectionButton(cpuOptionsAll, selection)
{
    //resetting color selections
    cpuOptionsAll.forEach((button)=>{
        button.style.background = "";
    });

    //adding color to the selection
    cpuOptionsAll.forEach((button) =>{
        if(button.textContent.trim().toLowerCase() === selection)
            {
                button.style.background = "red";
            }
    });
}
