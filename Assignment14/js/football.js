var c = document.getElementById('FootballCanvas');
var ctx = c.getContext('2d');

// Set the colors and line width
ctx.fillStyle = '#000'; // Black color for the football
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;

// Draw the football shape using lineTo() and curves
ctx.beginPath();
ctx.moveTo(250, 100); // Move to the starting point

ctx.quadraticCurveTo(350, 75, 450, 100);

ctx.quadraticCurveTo(350, 125, 250, 100);

// Close the path and fill the football
ctx.closePath();
ctx.fill();
