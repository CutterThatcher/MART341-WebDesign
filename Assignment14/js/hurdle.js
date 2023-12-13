var c = document.getElementById("myCanvas");
var ctx = c.getctx("2d");

// Set the colors
ctx.fillStyle = '#A9A9A9'; // SaddleBrown color for the hurdle base
ctx.strokeStyle = '#9D123C'; // DarkGray color for the posts and crossbar

// Draw the hurdle base
ctx.beginPath();
ctx.moveTo(100, 220); // Move to the starting point
ctx.lineTo(300, 220); // Draw a line to the right
ctx.lineTo(300, 200); // Draw a line up
ctx.lineTo(100, 200); // Draw a line to the left
ctx.closePath(); // Close the path
ctx.fill(); // Fill the base

// Draw the hurdle posts
ctx.beginPath();
ctx.moveTo(160, 160); // Move to the starting point of the first post
ctx.lineTo(160, 200); // Draw a line up for the first post
ctx.stroke(); // Draw the first post

ctx.moveTo(240, 160); // Move to the starting point of the second post
ctx.lineTo(240, 200); // Draw a line up for the second post
ctx.stroke(); // Draw the second post

// Draw the crossbar
ctx.beginPath();
ctx.moveTo(160, 140); // Move to the starting point of the crossbar
ctx.lineTo(260, 140); // Draw a line to the right for the crossbar
ctx.stroke(); // Draw the crossbar