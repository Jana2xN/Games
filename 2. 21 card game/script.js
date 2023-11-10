document.addEventListener("DOMContentLoaded", function () {
    const drawButton = document.getElementById("drawButton");
    const stopButton = document.getElementById("stopButton");
    const playerTotalSpan = document.getElementById("playerTotal");
    const computerTotalSpan = document.getElementById("computerTotal");
    const result = document.getElementById("result");
    const playerCardsDiv = document.getElementById("playerCards");
    const computerCardsDiv = document.getElementById("computerCards");
    const newRoundButton = document.getElementById("newRoundButton");

    let playerTotal = 0;
    let computerTotal = 0;
    const cardNames = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    let playerBusted = false;
    let computerBusted = false;

    drawButton.addEventListener("click", function () {
        if (!playerBusted && playerTotal < 21) {
            const cardValue = Math.floor(Math.random() * 11) + 1;
            const cardName = cardNames[cardValue - 1];
            playerTotal += cardValue;
            playerTotalSpan.textContent = playerTotal;

            const cardElement = document.createElement("div");
            cardElement.textContent = cardName;
            playerCardsDiv.appendChild(cardElement);

            if (playerTotal > 21) {
                result.textContent = "Player Busts! Computer Wins.";
                playerBusted = true;
                endRound();
            }
        }
    });

    stopButton.addEventListener("click", function () {
        if (!playerBusted) {
            while (computerTotal < 15 && !computerBusted) {
                const cardValue = Math.floor(Math.random() * 11) + 1;
                const cardName = cardNames[cardValue - 1];
                computerTotal += cardValue;
                computerTotalSpan.textContent = computerTotal;

                const cardElement = document.createElement("div");
                cardElement.textContent = cardName;
                computerCardsDiv.appendChild(cardElement);

                if (computerTotal > 21) {
                    result.textContent = "Computer Busts! Player Wins.";
                    computerBusted = true;
                    endRound();
                }
            }

            if (!computerBusted) {
                determineWinner();
                endRound();
            }
        }
    });

    function determineWinner() {
        if (playerTotal > computerTotal) {
            result.textContent = "Player Wins!";
        } else if (playerTotal < computerTotal) {
            result.textContent = "Computer Wins!";
        } else {
            result.textContent = "It's a tie!";
        }
    }

    function endRound() {
        drawButton.disabled = true;
        stopButton.disabled = true;
        newRoundButton.classList.remove("hidden");
    }

    newRoundButton.addEventListener("click", function () {
        playerTotal = 0;
        computerTotal = 0;
        playerBusted = false;
        computerBusted = false;

        playerTotalSpan.textContent = playerTotal;
        computerTotalSpan.textContent = computerTotal;

        result.textContent = "";
        playerCardsDiv.innerHTML = "";
        computerCardsDiv.innerHTML = "";

        drawButton.disabled = false;
        stopButton.disabled = false;
        newRoundButton.classList.add("hidden");
    });
});