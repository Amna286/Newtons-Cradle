const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload() {
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(280, 400);
	bob2 = new Bob(340, 400);
	bob3 = new Bob(400, 400);
	bob4 = new Bob(460, 400);
	bob5 = new Bob(520, 400);

	roof = new Roof(400, 50, 600, 50);

	rope1 = new Rope(bob1.body, roof.body, -120, 0);
	rope2 = new Rope(bob2.body, roof.body, -60, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 60, 0);
	rope5 = new Rope(bob5.body, roof.body, 120, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
		Matter.Body.setStatic(bob1.body, false);
		
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-250, y:20});
		
		//Matter.Body.setStatic(bob2.body, false);
		//Matter.Body.setStatic(bob3.body, false);
		//Matter.Body.setStatic(bob4.body, false);
		//Matter.Body.setStatic(bob5.body, false);
	}
}