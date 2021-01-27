class Ground {
  constructor(x, y, width, height) {
    this.ground = Bodies.rectangle(x, y, width, height, { isStatic: true });
    this.width = width;
    this.height = height;
    World.add(myWorld, this.ground);
  }
  display() {
    rectMode(CENTER);
    fill("brown");

    var pos = this.ground.position;

    rect(pos.x, pos.y, this.width, this.height);
  }
}
