function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const h1 = document.querySelector("h1");
  if (!key) {
    h1.textContent = `${e.keyCode} is invalid`;
    h1.style.color = "#f06543";
  } else {
    h1.textContent = `${e.keyCode} is the valid`;
    h1.style.color = "#80ed99";
  }
  if (!audio) return;
  key.classList.add("playing");
  clearTimeout(key._playingTimeout);
  key._playingTimeout = setTimeout(() => {
    key.classList.remove('playing')
  }, 500);
  console.log(key);
  audio.currentTime = 0;
  audio.play();
}
window.addEventListener("keydown", playSound);

// THE BELOW CODE CAUSES SOME TRANSITION/TRANSFORM PROBLEM WHEN HAMMARED ON THE KEYBOARD
// const keys = document.querySelectorAll('.key');
// keys.forEach(k => {
//     k.addEventListener('transitionend', (e) =>{
//         console.log(e);
//         if(e.propertyName !== 'transform') return;
//         k.classList.remove('playing')
//     })
// })
