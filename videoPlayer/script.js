// Select all the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

// Build up the functions
// 1. togglePlay with video properties of play and pause

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
    const icon = this.paused ? '▶' : '⏸';
    toggle.textContent = icon;
}
// Hook up the event listener
video.addEventListener("click", togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);