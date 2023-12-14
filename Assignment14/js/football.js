var c = document.getElementById('FootballCanvas');
var ctx = c.getContext('2d');

// Set the colors and line width
ctx.fillStyle = '#000'; // Black color for the football
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;

// Draw the football shape using lineTo() and curves
ctx.beginPath();
ctx.moveTo(50, 300); // Move to the starting point

ctx.quadraticCurveTo(250, 175, 450, 300);

ctx.quadraticCurveTo(250, 425, 50, 300);

// Close the path and fill the football
ctx.closePath();
ctx.fill();
