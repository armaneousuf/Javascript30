When I was trying canvas I was completely puzzled. it felt so frustrating, I felt like I was writing something completely in a different language rather than my usual javascript. But after reading the MDN doc and watching some videos...it still feels difficut and frustrating. But despite everything let's try to build something. Polishing can come later.

First we need to select the id from html

```js
const canvas = document.querySelector("#draw");
```

we need `canvas.getContext` here to tell the browser what type of drawing we are going to draw. For now the screen is blank so we need to tell it's what we are going to do. The `<canvas>` element has a method call `getContext`. That's the one we are targeting here

```js
const ctx = canvas.getContext("2d");
```

we are going to draw on the whole window so we need to target the whole window. But can't just let the html decide the window. We need to overwrite it and javascript can help here with it's `innerHeight` and `innerWidth` properties

```js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

That's a lot. I know. So, let's slow down and draw our first rectangle.

```js
function draw() {
  const canvas = document.querySelector("#draw");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200 0 0 / 50%)"; // setting the rect color with the fillStyle property
  ctx.fillRect(10, 10, 50, 50); // drawing the rectangle using the fillRect canvas api's method
}
draw();
```

That was easy but we are not going to draw shapes. Our goal is to use freehand. Comment out or delete the previous `draw` function.

For now we need four things before going forward. Set the color of the pen, how we want our pen to be, how the ends of lines look and the size of the pen.

```js
ctx.strokeStyle = "rgb(200 135 90)";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
```

Here we can set the pen color with `strokeStyle`, how corners between connected lines look with `lineJoin`, the ending of the lines with `lineCap` (default to butt) and the size with `lineWidth`.

we don't want to draw with every movement our mouse do. Only when we click on the mouse and move it. So here it is

```js
let isDrawing = false;
```

```js
let lastX = 0;
let lastY = 0;
```

lastX/Y starts at 0 as a placeholder. Later it gets replaced by the real mouse X/Y position from e.offsetX/Y.

Let's draw it now:

```js
function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
```

The condition prevents drawing when the mouse button is not being held down
`beginPath()` starts a new path everytime
`moveTo()` starts point of the line
`lineTo()` draws a line from the current point to the current mouse position
`stroke()` draws the path onto the canvas using the current stroke settings
`[lastX, lastY] = [e.offsetX, e.offsetY]` updates to the current mouse position by destructuring

```js
// Mouse button pressed down → start drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Mouse button released → stop drawing
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Mouse leaves canvas → also stop
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

// Mouse moves → only draw if the flag is true
canvas.addEventListener("mousemove", draw);
```

That's it for today. Tada!

Further reading:

1. [Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
2. [Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
3. [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp)
