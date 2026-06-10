const pomodoroTime = 10;
const restTime = 5;

let isRunning = false;
let remainingSecs = pomodoroTime;
let workTime = true;

let timerVar;

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", handleButtonPress);
const timerText = document.getElementById("timer-text");

function handleButtonPress(event) {
    isRunning = !isRunning;
    if (isRunning) {
        timerVar = window.setInterval(perSecond, 1000);
        console.log("timer started");
        startButton.innerText = "Stop";
    }
    else {
        clearInterval(timerVar);
        console.log("timer stopped");
        startButton.innerText = "Start";
    }
}

function perSecond() {
    remainingSecs--;
    timerText.innerHTML = remainingSecs;
    // console.log(remainingSecs);
    if (remainingSecs == 0) {
        clearInterval(timerVar);
        console.log("timer ended");
        startButton.innerText = "Start";
        isRunning = false;
        workTime = !workTime;
        if (workTime) {
            console.log("work time!");
            remainingSecs = pomodoroTime;
            timerText.innerHTML = remainingSecs;
        }
        else {
            console.log("rest time ^^");
            remainingSecs = restTime;
            timerText.innerHTML = remainingSecs;
        }
    }
}