
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var side1,bottom,side2;
var ground;

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Paper(200,140,20);
	
	bottom = new Dustbin(600,280,100,20);
	bottom.shapeColor = "Red";

	side1 = new Dustbin(550,240,20,100);
	side1.shapeColor = "Red";

	side2 = new Dustbin(650,240,20,100);
	side2.shapeColor = "Red";
	
	ground = new Ground(200,height,1200,20)
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  bottom.display();
  side1.display();
  side2.display();
  ground.display();
  drawSprites();

  console.log(bottom.body.position.y);
  console.log(side1.body.position.y);
  console.log(side2.body.position.y);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50})
  }
}



