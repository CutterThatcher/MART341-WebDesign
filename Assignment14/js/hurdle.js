var c = document.getElementById("HurdleCanvas");
var ctx = c.getContext("2d");

// Draw the hurdle base
ctx.beginPath();
ctx.moveTo(150, 365); // Move to the starting point
ctx.lineTo(350, 365); // Draw a line to the right
ctx.lineTo(350, 345); // Draw a line up
ctx.lineTo(150, 345); // Draw a line to the left
ctx.closePath(); // Close the path
ctx.fillStyle = '#A9A9A9';
ctx.fill(); // Fill the base

// Draw the left post
ctx.beginPath();
ctx.moveTo(150, 345); //starting point
ctx.lineTo(150, 245); //line up
ctx.lineTo(160, 245); //line right
ctx.lineTo(160, 345); //line down
ctx.closePath();
ctx.fillStyle = '#9D123C';
ctx.fill();

// Draw the right post
ctx.beginPath();
ctx.moveTo(350, 345); //starting
ctx.lineTo(350, 245); // line up
ctx.lineTo(340, 245);// line left
ctx.lineTo(340, 345);// line down
ctx.closePath();
ctx.fill();

// Draw the crossbar
ctx.beginPath();
ctx.moveTo(145, 245); //starting
ctx.lineTo(355, 245); //line right
ctx.lineTo(355, 235); //line up
ctx.lineTo(145, 235); //line left
ctx.closePath();
ctx.fillStyle = '#000000';
ctx.fill();