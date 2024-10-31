// Initialize variables
let timerInterval;
let elapsedTime = 0;
const timeDisplay = document.getElementById("timeDisplay");
const datePicker = document.getElementById("datePicker");

// Set initial date to today's date
const today = new Date().toISOString().split("T")[0];
datePicker.value = today;

// Function to format time and return a Promise
function formatTime(ms) {
  const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  return new Promise((resolve) => {
    const formattedTime = formatTime(elapsedTime);
    timeDisplay.textContent = formattedTime;
    resolve(formattedTime);
  });
}

// Start button handler
document.getElementById("startButton").addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(async () => {
      elapsedTime += 1000;
      await updateTime();
    }, 1000);
  }
});

// Stop button handler
document.getElementById("stopButton").addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// Reset button handler
document.getElementById("resetButton").addEventListener("click", () => {
  elapsedTime = 0;
  clearInterval(timerInterval);
  timerInterval = null;
  updateTime();
});
