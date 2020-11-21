class Ball{

    constructor(x,y,r){

        this.body = Bodies.circle(x,y,r);
        World.add(world, this.body);
        this.r=r
        this.image = loadImage("polygon.png");

    }

    display(){
    
        push ()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.r*2, this.r*2)
        
        pop ()
    }
}