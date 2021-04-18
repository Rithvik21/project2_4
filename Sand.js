class Sand {
    constructor(x, y) {
      var options = {
        'density':0.3,
        'friction': 3.0,
        'restitution':0.3
      };
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 15;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    };
  };