// Select all the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullscreenBtn = player.querySelector('.fullscreen');

// Build up the functions
// 1. togglePlay with video properties of play and pause

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(e) {
  // const icon = this.paused ? '▶' : '⏸';
  const icon = e.target.paused ? "▶" : "⏸";
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  // console.log(video.currentTime);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

let mousedown = false;
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullscreen() {
  if(!document.fullscreenElement) {
    player.requestFullscreen()
    .catch(err => console.log(`The error is: ${err}`))
  } else {
    document.exitFullscreen()
  }

}

// Hook up the event listener
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});
ranges.forEach((range) => {
  range.addEventListener("input", handleRangeUpdate);
});
progress.addEventListener('click', scrub);
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
fullscreenBtn.addEventListener('click', fullscreen);