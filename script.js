let stopwatch;
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  display.textContent = formattedTime;
}

function padNumber(number) {
  return number < 10 ? `0${number}` : number;
}
