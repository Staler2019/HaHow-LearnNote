const timer = document.querySelector(".timer");

let defaultSeconds = 120;
let totalSeconds = 0;
let running = false;
let paused = false;
let timerID;

function updateTimer(seconds) {
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0"); // String.padStart(dim, char) 從前方補幾位數的 char
  let secs = String(seconds % 60).padStart(2, "0");

  timer.textContent = `${mins}:${secs}`;

  if (seconds === 0) {
    timer.classList.add("times-up");
  } else {
    timer.classList.remove("times-up");
  }
}

function timesUp() {
  clearInterval(timerID);
  console.log("stop");
  updateTimer(0);
  running = false;
  playSound();
}

function playSound() {
  const sound = new Audio("sounds/mixkit-classic-alarm-995.wav");
  sound.play();
}

function setupTimer() {
  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds--;
      // console.log(totalSeconds);
      updateTimer(totalSeconds);
    } else {
      timesUp();
    }
  }, 1000); // 1000 ms
}

function initTimer() {
  running = true;
  totalSeconds = defaultSeconds;
  updateTimer(totalSeconds);
  setupTimer();
}

function pauseTimer() {
  paused = true;
  console.log("pause");
  clearInterval(timerID);
}

function resumeTimer() {
  paused = false;
  console.log("resume");
  setupTimer();
}

document.addEventListener("keyup", (e) => {
  // console.log(e)
  if (!running && e.key === "Enter") {
    initTimer();
  } else if (running && e.key === " ") {
    if (paused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  }
});

// extended reference: timer.5xcampus.com