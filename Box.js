class Box{
    constructor(x, y, width, height){
        this.Body1 = MB.rectangle(x, y, width, height);
        MW.add(world,this.Body1);
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        translate( this.Body1.position.x,  this.Body1.position.y);
        rotate( this.Body1.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}