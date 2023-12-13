var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw the hurdle base
ctx.fillStyle = '#A9A9A9';
ctx.fillRect(100, 200, 200, 20);

// Draw the hurdle posts
ctx.fillStyle = '#9D123C';
ctx.fillRect(150, 160, 20, 40);
ctx.fillRect(230, 160, 20, 40);

// Draw the crossbar
ctx.fillStyle = '#A9A9A9';
ctx.fillRect(150, 140, 100, 20);