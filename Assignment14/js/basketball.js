var c = document.getElementById('BasketballCanvas');
var ctx = c.getContext('2d');

ctx.fillStyle = '#9D123C';
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;

ctx.beginPath();
ctx.arc(250, 300, 200, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.moveTo(250, 500);
ctx.lineTo(250, 100);
ctx.moveTo(50, 300);
ctx.lineTo(450, 300)

ctx.moveTo(108.6, 158.6);
ctx.quadraticCurveTo(150, 300, 108.6, 441.4);

ctx.moveTo(391.4, 158.6)
ctx. quadraticCurveTo(350, 300, 391.4, 441.4);
ctx.stroke();