function playSound(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(audio, key);
    if(!audio) return;
    // key.classList.toggle('playing')
    if(key === e.keyCode){
        key.classList.toggle('playing')
    }

    audio.currentTime = 0
    audio.play()
}

window.addEventListener('keydown', playSound)