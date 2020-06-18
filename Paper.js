class Paper{
  constructor(x, y, width, height) {

      var options = {
          restitution:0,
          friction:0,
          density:1.2
      }

  this.body = Bodies.circle(x, y,20, options);
  this.radius=33;
  this.image=loadImage("Sprites/paper.png");

  World.add(world, this.body);
}

display(){
  var pos =this.body.position;
  //imageMode(CENTER);
  image(this.image,pos.x,pos.y,33,33);
}
}

