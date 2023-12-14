var c = document.getElementById('BasketballCanvas');
var ctx = c.getContext('2d');

ctx.fillStyle = '#A9A9A9';
ctx.strokeStyle = '#9D123C';
ctx.lineWidth = 2;

ctx.arc(250, 300, 100, 0, 2*Math.PI);
ctx.stroke();