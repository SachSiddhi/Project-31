class Particle{
    constructor(x, y, r) {
        var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        //this.width = width;
        //this.height = height;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}



