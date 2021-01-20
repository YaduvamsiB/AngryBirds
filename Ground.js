class Ground {
  constructor() {
    this.ground = Bodies.rectangle(300, 580, 600, 10, { isStatic: true });
    World.add(myWorld, this.ground);
  }
  display() {
    rectMode(CENTER);
    fill("brown");

    rect(300, 580, 600, 10);
  }
}
