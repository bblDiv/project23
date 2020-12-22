
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paper1,ground1;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    dustbin1=new Dustbin(600,600,20,100);
    dustbin2=new Dustbin(660,640,100,20);
    dustbin3=new Dustbin(720,600,20,100);
    ground1=new Ground(0,650,1600,10)
    paper1=new Paper(100,640,10);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 paper1.display();

 ground1.display();
 
}



