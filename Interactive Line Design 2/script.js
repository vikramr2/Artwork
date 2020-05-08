//set canvas to window size
var h = window.innerHeight;
var w = window.innerWidth;

//geometric variables
var radius = 200;
var center = [w/2, h/2];
var inc = 20;
var angle = 0;
var dist;

//initialize canvas
function setup() {
	createCanvas(w, h);
}

function draw() {
	background(255, 255, 255);

	//base lines
	line(center[0]-radius*Math.cos(angle), center[1]-radius*Math.sin(angle), center[0]+radius*Math.cos(angle), center[1]+radius*Math.sin(angle));
	line(center[0]-radius*Math.cos(angle), center[1]+radius*Math.sin(angle), center[0]+radius*Math.cos(angle), center[1]-radius*Math.sin(angle));

	//filler lines, uses trig to get coordinates of filler lines
	for(var i = 0; i <= radius; i += inc) {
		line(center[0]+i*Math.cos(angle), center[1]-i*Math.sin(angle), center[0]+(radius-i)*Math.cos(angle), center[1]+(radius-i)*Math.sin(angle));
	}
	for(var i = 0; i <= radius; i += inc) {
		line(center[0]-i*Math.cos(angle), center[1]-i*Math.sin(angle), center[0]-(radius-i)*Math.cos(angle), center[1]+(radius-i)*Math.sin(angle));
	}
	for(var i = 0; i <= radius; i += inc) {
		line(center[0]-i*Math.cos(angle), center[1]+i*Math.sin(angle), center[0]+(radius-i)*Math.cos(angle), center[1]+(radius-i)*Math.sin(angle));
	}
	for(var i = 0; i <= radius; i += inc) {
		line(center[0]+i*Math.cos(angle), center[1]-i*Math.sin(angle), center[0]-(radius-i)*Math.cos(angle), center[1]-(radius-i)*Math.sin(angle));
	}

	//animates the rotation
	angle+=0.01;

	dist = Math.sqrt(Math.pow((mouseX-center[0]), 2)+Math.pow((mouseY-center[1]), 2));
	radius = Math.ceil(dist/inc)*inc;
}