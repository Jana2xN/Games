const playerButtons = document.querySelectorAll(".player-choice button");
const playButton = document.getElementById("playButton");
const playAgainButton = document.getElementById("playAgainButton");
const resultMessage = document.querySelector(".result p");

let playerChoice;
let computerChoice;

// Event listeners for player's choice buttons
playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        playerButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

// Event listener for the "Play" button
playButton.addEventListener("click", () => {
    if (!playerChoice) {
        resultMessage.textContent = "Please choose a weapon first.";
        return;
    }

    computerChoice = generateComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);

    playButton.disabled = true;
    playAgainButton.classList.remove("hidden");
});

// Event listener for the "Play Again" button
playAgainButton.addEventListener("click", () => {
    playerChoice = null;
    computerChoice = null;
    resultMessage.textContent = "Choose your weapon and click 'Play' to start the game.";
    playButton.disabled = false;
    playAgainButton.classList.add("hidden");
    playerButtons.forEach((button) => button.classList.remove("selected"));
});

function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function displayResult(result) {
    if (result === "draw") {
        resultMessage.textContent = "It's a draw!";
    } else if (result === "win") {
        resultMessage.textContent = "You win! 🎉";
    } else {
        resultMessage.textContent = "You lose! 😔";
    }
}
