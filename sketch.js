const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var boy, boyImg;
var score = 0;
var backgroundImg;
var bg = "bg.png";  

function preload()
{
 getBackgroundImg();
}

function setup()
 {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;
  
 	ground = new Ground(500,590,1000,20);
  ground1 = new Ground(600,400,200,20);
  
  sideGround = new Ground(990,300,20,10000);
  sideGround1 = new Ground(10,300,20,10000)
  
  ball = new Ball(125,450,20);
 
  string = new Slingshot(ball.body,{x:150, y:375});
  
  box1 = new Boxblue(515,375,20,30);
  box2 = new Boxblue(545,375,20,30);
  box3 = new Boxblue(575,375,20,30);
  box4 = new Boxblue(600,375,20,30);
  box5 = new Boxblue(625,375,20,30);
  box6 = new Boxblue(655,375,20,30);
  box7 = new Boxblue(685,375,20,30);
  box8 = new Boxblue(525,345,20,30);
  box9 = new Boxblue(555,345,20,30);
  box10 = new Boxblue(585,345,20,30);
  box11 = new Boxblue(615,345,20,30);
  box12 = new Boxblue(645,345,20,30);
  box13 = new Boxblue(675,345,20,30);
  box14 = new Boxblue(540,315,20,30);
  box15 = new Boxblue(570,315,20,30);
  box16 = new Boxblue(600,315,20,30);
  box17 = new Boxblue(630,315,20,30);
  box18 = new Boxblue(660,315,20,30);
  box19 = new Boxblue(555,285,20,30);
  box20 = new Boxblue(585,285,20,30);
  box21 = new Boxblue(615,285,20,30);
  box22 = new Boxblue(645,285,20,30);
  box23 = new Boxblue(570,255,20,30);
  box24 = new Boxblue(600,255,20,30);
  box25 = new Boxblue(630,255,20,30);
  box26 = new Boxblue(585,225,20,30);
  box27 = new Boxblue(615,225,20,30);
  box28 = new Boxblue(600,195,20,30);
	
	Engine.run(engine); 
}

function draw() 
{
  if(backgroundImg)
  {
    background(backgroundImg);
  }
  
  rectMode(CENTER);
  
  fill("yellow")
  textSize(20);
  text("Score:" + score, 20,20);
  text("Click to drag the ball and throw it at the stack of  boxes & press SPACE to retry",100,100);
  
  drawSprites();
 
  string.display();
  ground.display();
  ground1.display();
  
  ball.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  sideGround.display();
  sideGround1.display(); 
 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();

  getBackgroundImg();
}

function mouseDragged()
{
 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(ball.body,{x:150, y:375})
		string.attach(ball.body);
	}
}

async function getBackgroundImg()
{
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>= 06 && hour<= 19) 
  {
    bg = "bg.png";  
  }
  else
  {
   bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}