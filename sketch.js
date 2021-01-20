// namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// variables for Engine and World
var myEngine, myWorld;

// variables for body
var ground;

var ball1, ball2;

function setup() {
  createCanvas(600, 600);

  //creating Engine
  myEngine = Engine.create();

  //creating World using Engine
  myWorld = myEngine.world;

  ball1 = new Box(230, 200, 50, 50);
  ball2 = new Box(200, 50, 50, 100);

  ground = new Ground();
}

function draw() {
  background(0);

  // Updating the Engine // --- this is Important --- \\
  Engine.update(myEngine);

  ball1.display();
  ball2.display();
  ground.display();
}
