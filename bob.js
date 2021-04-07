class Bob {
    constructor(x, y) {
      var options = {
          //'isStatic':true,
          'density':3,
          'friction':0.3,
          'restitution':1
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;

      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      fill("yellow");
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius*2);
      pop();
    }
  }