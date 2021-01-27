class Log {
  constructor(x, y, height, angle) {
    var options = {
      restitution: 0.5,
      friction: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    strokeWeight(4);
    stroke("blue");
    rect(0, 0, 20, this.height);
    pop();
  }
}
