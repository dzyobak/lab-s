let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener("click", function () {
  timeMinut = parseInt(timerInput.value);
});

timer = setInterval(function () {
  seconds = timeMinut % 60;
  if (timeMinut <= 0) {
    clearInterval(timer);
    alert("Час вийшов");
  } else {
    let strTimer = `${seconds}`;
    timerShow.innerHTML = strTimer;
  }
  --timeMinut;
}, 1000);
