var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

// red triangle
ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

// black tree 1
ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(150,0);
ctx.lineTo(150,500);
ctx.lineTo(50,500);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

//black tree 2
ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(450,0);
ctx.lineTo(450,500);
ctx.lineTo(400,500);
ctx.fill();

//black tree 3
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(320,0);
ctx.lineTo(320,300);
ctx.lineTo(300,300);
ctx.fill();

//black tree 4
ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(230,0);
ctx.lineTo(230,350);
ctx.lineTo(200,350);
ctx.fill();

//fill text
ctx.font = '40pt Roboto';
ctx.strokeText('Picture This', 100, 550);

//Author
ctx.font = '20pt Roboto';
ctx.fillStyle = 'red';
ctx.fillText('by Molly Bang', 200, 580);