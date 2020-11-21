class Slingshot{

    constructor(body1, pointB){

        var options={
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.1,
            length: 20
        }

        this.sling = Constraint.create(options)
        World.add(world, this.sling);
    
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }

        display(){
            if(this.sling.bodyA!= null){
            push()
            var pos1 = this.sling.bodyA.position
            var pos2 = this.sling.pointB
            line(pos1.x, pos1.y, pos2.x, pos2.y);
            pop ()
            }
        }
}