let startTime;
let timeout;
let bestTime = localStorage.getItem("bestTime");

const result = document.getElementById("result");
const best = document.getElementById("best");
const box = document.getElementById("box");
const instruction = document.getElementById("instruction");

if (bestTime) {
    best.textContent = "🏆 Ең жақсы нәтиже: " + bestTime + " мс";
}

function startGame() {
    result.textContent = "";
    instruction.textContent = "Күте тұр...";
    box.style.display = "none";

    const randomTime = Math.random() * 3000 + 1000;

    timeout = setTimeout(() => {
        box.style.display = "flex";
        startTime = Date.now();
        instruction.textContent = "ҚАЗІР БАС!";
    }, randomTime);
}

function boxClicked() {
    const reactionTime = Date.now() - startTime;
    box.style.display = "none";

    result.textContent = "⏱ Сенің реакцияң: " + reactionTime + " мс";

    if (!bestTime || reactionTime < bestTime) {
        bestTime = reactionTime;
        localStorage.setItem("bestTime", bestTime);
        best.textContent = "🏆 Жаңа рекорд: " + bestTime + " мс";
    }
}
