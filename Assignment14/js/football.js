// football.js

// Get the canvas element and its ctx
var c = document.getElementById('FootballCanvas');
var ctx = canvas.getContext('2d');

// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Set the colors and line width
ctx.fillStyle = '#000'; // Black color for the football
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;

// Draw the football shape using lineTo() and curves
ctx.beginPath();
ctx.moveTo(250, 100); // Move to the starting point

// Draw the top curve
ctx.bezierCurveTo(100, 50, 400, 50, 250, 100);

// Draw the left side curve
ctx.bezierCurveTo(200, 150, 200, 250, 250, 300);

// Draw the bottom curve
ctx.bezierCurveTo(300, 250, 300, 150, 250, 100);

// Close the path and fill the football
ctx.closePath();
ctx.fill();
