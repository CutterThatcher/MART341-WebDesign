var c = document.getElementById("HurdleCanvas");
var ctx = c.getContext("2d");

// Draw the hurdle base
ctx.beginPath();
ctx.moveTo(100, 220); // Move to the starting point
ctx.lineTo(300, 220); // Draw a line to the right
ctx.lineTo(300, 200); // Draw a line up
ctx.lineTo(100, 200); // Draw a line to the left
ctx.closePath(); // Close the path
ctx.fillStyle = '#A9A9A9';
ctx.fill(); // Fill the base

// Draw the left post
ctx.beginPath();
ctx.moveTo(100, 200); //starting point
ctx.lineTo(100, 100); //line up
ctx.lineTo(110, 100); //line right
ctx.lineTo(110, 200); //line down
ctx.closePath();
ctx.fillStyle = '#9D123C';
ctx.fill();

// Draw the right post
ctx.beginPath();
ctx.moveTo(300, 200); //starting
ctx.lineTo(300, 100); // line up
ctx.lineTo(290, 100);// line left
ctx.lineTo(290, 200);// line down
ctx.closePath();
ctx.fill();

// Draw the crossbar
ctx.beginPath()
ctx.moveTo(95, 100); //starting
ctx.lineTo(305, 100); //line right
ctx.lineTo(305, 90); //line up
ctx.lineTo(95, 90); //line left
ctx.closePath();
ctx.fillStyle = '#000000';
ctx.fill();




// ctx.moveTo(320, 320); // Move to the starting point of the first post
// ctx.lineTo(320, 400); // Draw a line up for the first post
// ctx.stroke(); // Draw the first post

// ctx.moveTo(480, 320); // Move to the starting point of the second post
// ctx.lineTo(480, 320); // Draw a line up for the second post
// ctx.stroke(); // Draw the second post

// // Draw the crossbar
// ctx.beginPath();
// ctx.moveTo(320, 280); // Move to the starting point of the crossbar
// ctx.lineTo(520, 280); // Draw a line to the right for the crossbar
// ctx.stroke(); // Draw the crossbar