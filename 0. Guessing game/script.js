// Generate a random secret number between 1 and the maximum value
const maxNumber = 25;
const secretNumber = Math.floor(Math.random() * maxNumber) + 1;

// Get HTML elements
const userGuessInput = document.getElementById("userGuess");
const playButton = document.getElementById("playButton");

// Add a click event listener to the "Play" button
playButton.addEventListener("click", checkGuess);

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(userGuessInput.value);

    // Check if the user's guess is correct
    if (userGuess === secretNumber) {
        alert(`Awesome! Your number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
    } else {
        const difference = Math.abs(secretNumber - userGuess);
        if (difference === 1) {
            alert(`So close, but you just missed it! Are you in a class that started on the thirteenth or what?`);
        } else {
            alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNumber}.`);
        }
    }
}
