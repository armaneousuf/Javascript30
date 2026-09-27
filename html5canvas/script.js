const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
console.log(canvas, ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#be1a1a";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
