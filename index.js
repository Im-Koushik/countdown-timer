(async function () {
  const timerForm = document.querySelector(".timer-form");
  const startButton = document.querySelector(".start");
  const resetButton = document.querySelector(".reset");
  const pauseButton = document.querySelector(".pause");

  pauseButton.style.display = "none";

  const hourInput = document.querySelector(".hour-input");
  const minInput = document.querySelector(".min-input");
  const secInput = document.querySelector(".sec-input");

  const startTimer = () => {
    totalSeconds =
      parseInt(hourInput.value || 0) * 3600 +
      parseInt(minInput.value || 0) * 60 +
      parseInt(secInput.value || 0);
    timerForm
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = true));
    startButton.style.display = "none";
    pauseButton.style.display = "inline";

    timerInterval = setInterval(updateTimer, 1000);
  };

  const updateTimer = () => {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hourInput.value = hours.toString().padStart(2, "0");
    minInput.value = minutes.toString().padStart(2, "0");
    secInput.value = seconds.toString().padStart(2, "0");

    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(timerInterval);
      timerForm
        .querySelectorAll("input")
        .forEach((input) => (input.disabled = false));
      timerForm.reset();
      startButton.style.display = "inline";
      pauseButton.style.display = "none";
    }
  };

  const resetTimer = () => {
    totalSeconds = 0;
    hourInput.value = "";
    minInput.value = "";
    secInput.value = "";
    timerForm
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = false));
    startButton.style.display = "inline";
    pauseButton.style.display = "none";
  };

  const pauseTimer = () => {
    clearInterval(timerInterval);
    timerForm
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = false));
    startButton.style.display = "inline";
    pauseButton.style.display = "none";
  };

  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);
})();
