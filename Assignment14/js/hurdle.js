var c = document.getElementById("HurdleCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = '#A9A9A9';
ctx.strokeStyle = '#9D123C';

// Draw the hurdle base
ctx.beginPath();
ctx.moveTo(200, 440); // Move to the starting point
ctx.lineTo(600, 440); // Draw a line to the right
ctx.lineTo(600, 400); // Draw a line up
ctx.lineTo(200, 400); // Draw a line to the left
ctx.closePath(); // Close the path
ctx.fill(); // Fill the base

// Draw the hurdle posts
ctx.beginPath();
ctx.moveTo(320, 320); // Move to the starting point of the first post
ctx.lineTo(320, 400); // Draw a line up for the first post
ctx.stroke(); // Draw the first post

ctx.moveTo(480, 320); // Move to the starting point of the second post
ctx.lineTo(480, 320); // Draw a line up for the second post
ctx.stroke(); // Draw the second post

// Draw the crossbar
ctx.beginPath();
ctx.moveTo(320, 280); // Move to the starting point of the crossbar
ctx.lineTo(520, 280); // Draw a line to the right for the crossbar
ctx.stroke(); // Draw the crossbar