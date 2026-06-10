let isRunning = false;
let remainingSecs = 1500;

let timerVar;

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", handleButtonPress);

function handleButtonPress(event) {
    isRunning = !isRunning;
    if (isRunning) {
        timerVar = window.setInterval(perSecond, 1000);
        console.log("timer started");
        startButton.innerText = "Stop";
    }
    else {
        clearInterval(timerVar);
        console.log("timer stopped/ended");
        startButton.innerText = "Start";
    }
}

function perSecond() {
    remainingSecs--;
    console.log(remainingSecs);
}