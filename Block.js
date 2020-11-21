class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.4,
          friction: 0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    if(this.body.speed<3){
      push ()
      var pos =this.body.position;
      translate(pos.x, pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop ()
    }
    else{
        World.remove(world, this.body)
    }
    }
  }