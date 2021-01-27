// namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// variables for Engine and World
var myEngine, myWorld;

// variables for body
var ground;

var box1, box2, box3, box4, box5;

var pig1, pig2;

var log1, log2, log3, log4;

var bird;

function setup() {
  createCanvas(1200, 400);

  //creating Engine
  myEngine = Engine.create();

  //creating World using Engine
  myWorld = myEngine.world;

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(900, 320, 70, 70);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(900, 240, 70, 70);
  box5 = new Box(800, 150, 70, 70);

  pig1 = new Pig(800, 320);
  pig2 = new Pig(800, 240);

  log1 = new Log(800, 280, 300, PI / 2);
  log2 = new Log(800, 180, 300, PI / 2);
  log3 = new Log(720, 140, 150, PI / 7);
  log4 = new Log(880, 140, 150, -PI / 7);

  bird = new Bird(200, 200);

  ground = new Ground(600, 390, 1200, 10);
}

function draw() {
  background(0);

  // Updating the Engine // --- this is Important --- \\
  Engine.update(myEngine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
}
