const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
 dustbinImg=loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800,700);

  engine = Engine.create();
	world = engine.world;

  ground1= new Ground(370,695,870,10);
  paper=new Paper(55,600);
  
  dustbin= createSprite(707,607,100,20);
  dustbin.addImage(dustbinImg);
  dustbin.scale=0.5;

	box1=new Dustbin(656,640,20,100);
	box2=new Dustbin(755,640,20,100);
  box3=new Dustbin(707,680,100,20);

  launcher = new Launcher(paper.body,{x:200,y:300});
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(255);
  //Engine.update(engine);

  fill("black");
  text("y:"+mouseY,50,75);
  text("x:"+mouseX,50,50);
  textSize(20);
  text("CRUMPLED BALLS 3 ",330,60);

  ground1.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  launcher.display();

  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
  } 
}*/

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

