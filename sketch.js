const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var roof;
var rope;

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

	rope = new Rope(bob1, roof);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  rope.display();
  
  drawSprites();
}