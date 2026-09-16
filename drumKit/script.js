function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const h1 = document.querySelector('h1');
    h1.textContent = `The key is ${e.keyCode}`
    if(!audio) return;
    const keys = document.querySelectorAll('.key');
    keys.forEach(k => {
        if(k.classList.contains('playing')){
            k.classList.remove('playing')
        }
        setTimeout(() => {
            key.classList.remove('playing')
        }, 500);
    })
    key.classList.add('playing');

    audio.currentTime = 0
    audio.play()
}

window.addEventListener('keydown', playSound)