class Box{
    constructor(x,y,w,h){
        var options = {
            'density' : 0.05,
            'friction' : 1.0
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.h = h
        this.w = w

        World.add(world,this.body)
    }
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER)
        fill("blue")
        stroke('white')
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.w,this.h)
        pop();
    }
}
