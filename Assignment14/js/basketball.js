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
ctx.stroke();