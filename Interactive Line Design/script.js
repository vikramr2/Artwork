//set canvas to window size
var h = window.innerHeight;
var w = window.innerWidth;

//geometric variables
var radius = 200;
var center = [w/2, h/2];
var sides;
var central; //measure of central angle
var dist; //mouse distance from center

//initialize canvas
function setup() {
  createCanvas(w, h);
}

//updating function
function draw() {
	background(255, 255, 255);

	//setting sides as a function of distance mouse is from center
	dist = Math.sqrt(Math.pow((mouseX-center[0]), 2)+Math.pow((mouseY-center[1]), 2));
	sides = 3+Math.floor(dist/30);

	//capping the number of sides to 25 (past that it looks messy)
	if (sides > 25) {
		sides = 25;
	}

	//remember the central angle is 2pi/sides: must be in radians
	central = (2*Math.PI)/sides;

	//expand the design if the mouse is pressed
	if (mouseIsPressed) {
		radius++;
	} else {
		//otherwise, shrink and cap at 200 so that we dont have a literal dot for a line design
		radius--;
		if (radius <= 200) {
			radius = 200;
		}
	}

	//the actual design
	//it's basically a nested for loop that draws a segment between every possible point combination in a regular polygon
	for (var j = 0; j < sides; j++) {
		for (var i = 0; i < sides; i++) {
			line(Math.floor(center[0]+radius*Math.sin(central*j)), Math.floor(center[1]-radius*Math.cos(central*j)), Math.floor(center[0]+radius*Math.sin(central*i)), Math.floor(center[1]-radius*Math.cos(central*i)));
		}
	}
}