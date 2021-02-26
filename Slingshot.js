class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);

    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");

    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
  }

  display() {
    image(this.sling1, 200, 20);

    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = { x: 180, y: 55 };
      var pointC = { x: 230, y: 50 };

      push();
      stroke(48, 22, 8);
      if (pointA.x < 200) {
        strokeWeight(10);

        line(pointA.x - 15, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 15, pointA.y, pointC.x, pointC.y);
        image(this.sling3, pointA.x - 20, pointA.y - 14, 10, 30);
      } else {
        strokeWeight(8);

        line(pointA.x + 15, pointA.y, pointB.x, pointB.y);
        line(pointA.x + 15, pointA.y, pointC.x, pointC.y);
        image(this.sling3, pointA.x + 20, pointA.y - 14, 10, 30);
      }
      pop();
    }
    image(this.sling2, 170, 20);
  }
}
