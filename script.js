var counter = 0;
var timerId = null;

function startTimer() {
  if (timerId === null) {
    timerId = setInterval(function() {
      counter++;
      document.querySelector(".clockicons-timer").innerHTML = counter;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  counter = 0;
  document.querySelector(".clockicons-timer").innerHTML = counter;
  clearInterval(timerId);
  timerId = null;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
