class Slingshot {
  constructor(body1, pointB) {
    var option = {
      bodyA: body1,
      pointB: pointB,
      length: 10,
      stiffness: 0.6,
    };
    this.chain = Constraint.create(option);
    World.add(world, this.chain);

    this.pointB = pointB;
  }
  display() {
    if (this.chain.bodyA) {
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(5);
      stroke("brown");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }

  fly() {
    this.chain.bodyA = null;
  }
}
