
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup(){
createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,380,800,20)

	paper = new Paper(150,335,20,20)
	dustbin1 = new Dustbin(450,360,100,20)
	dustbin2 = new Dustbin(500,335,20,75)
	dustbin3 = new Dustbin(400,335,20,75)
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  dustbin1.display()
  dustbin2.display()
dustbin3.display()
drawSprites();  
}
function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-10})
	//Matter .Body.setStatic(paper,false)
	
	}