
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5, roofObject
var r1,r2,r3,r4;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(600, height/4, 500, 20);






	Engine.run(engine);
	
}
function draw() {

	background(230);
	rectMode(CENTER);
	roofObject.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce();

	}
}