
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject, paperball;
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperball = new Paper(200,500,80);

	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  paperball.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Body.applyForce(paperball.body, paperball.body.position,{x:220, y:-190})
}
}