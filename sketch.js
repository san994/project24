
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var engine,world;

var dustBin1,dustBin2,dustBin3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustBin1 = new DustBin(650,440,150,10);
    dustBin2 = new DustBin(730,390,10,100);
    dustBin3 = new DustBin(570,390,10,100);
    paper  = new Paper(100,440,20);
    ground = new Ground(400,450,900,10);

    Engine.run(engine);
  
}


function draw() {
  background(0);
  
  

 dustBin1.display();
 dustBin2.display();
 dustBin3.display();
 paper.display();
 ground.display();

  

  drawSprites();
 
}

function keyPressed(){

if(keyCode  === UP_ARROW){

 Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-65})


}


}


