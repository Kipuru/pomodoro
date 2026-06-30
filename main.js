const pomodoroTimeSecs = 1500;
const restTimeSecs = 300;

let timerRunning = false;
let remainingSecs = pomodoroTimeSecs;
let remainingTenSecs = 6;
let remainingMins = pomodoroTimeSecs / 60;
let workTime = true;

let timerVar;

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", handleButtonPress);
const timerText = document.getElementById("timer-text");

function handleButtonPress(event) {
    timerRunning = !timerRunning;
    if (timerRunning) {
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
    if (remainingSecs % 60 == 0) {
        remainingMins--;
        remainingTenSecs = 6;
    }
    if (remainingSecs % 10 == 0) {
        remainingTenSecs--;
    }
    remainingSecs--;
    timerText.innerHTML = (remainingMins + ":" + remainingTenSecs + (remainingSecs % 10));
    // console.log(remainingSecs);
    if (remainingSecs == 0) {
        clearInterval(timerVar);
        console.log("timer ended");
        startButton.innerText = "Start";
        timerRunning = false;
        workTime = !workTime;
        if (workTime) {
            console.log("work time!");
            remainingSecs = pomodoroTimeSecs;
            timerText.innerHTML = (remainingMins + ":" + remainingSecs);
        }
        else {
            console.log("rest time ^^");
            remainingSecs = restTimeSecs;
            timerText.innerHTML = remainingSecs;
        }
    }
}