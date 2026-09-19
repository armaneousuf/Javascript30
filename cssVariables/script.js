const inputs = document.querySelectorAll('.container input');

console.log(inputs);

function updateChanges(){
    console.log(this);
    console.log(this.value);
    console.log(this.id);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

inputs.forEach(input => {
    input.addEventListener('input', updateChanges)
})