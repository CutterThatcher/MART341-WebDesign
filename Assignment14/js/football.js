var c = document.getElementById('FootballCanvas');
var ctx = c.getContext('2d');

// Set the colors and line width
ctx.fillStyle = '#A9A9A9';
ctx.strokeStyle = '#9D123C';
ctx.lineWidth = 2;

// Draw the football shape using lineTo() and curves
ctx.beginPath();
ctx.moveTo(50, 300); // Move to the starting point

ctx.quadraticCurveTo(250, 150, 450, 300);
ctx.stroke();
ctx.quadraticCurveTo(250, 450, 50, 300);
ctx.stroke();
// Close the path and fill the football
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(350, 300);

ctx.moveTo(150, 290);
ctx.lineTo(150, 310);

ctx.moveTo(175, 290);
ctx.lineTo(175, 310);

ctx.moveTo(200, 290);
ctx.lineTo(200, 310);

ctx.moveTo(225, 290);
ctx.lineTo(225, 310);

ctx.moveTo(250, 290);
ctx.lineTo(250, 310);

ctx.moveTo(275, 290);
ctx.lineTo(275, 310);

ctx.moveTo(300, 290);
ctx.lineTo(300, 310);

ctx.moveTo(325, 290);
ctx.lineTo(325, 310);

ctx.moveTo(350, 290);
ctx.lineTo(350, 310);

ctx.stroke();