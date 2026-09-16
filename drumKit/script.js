function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const h1 = document.querySelector("h1");
  if (!key) {
    h1.textContent = `${e.keyCode} is invalid`;
    h1.style.color = "tomato";
  } else {
    h1.textContent = `${e.keyCode} is the valid`;
    h1.style.color = "#80ed99";
  }
  if (!audio) return;
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 500);

  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playSound);
