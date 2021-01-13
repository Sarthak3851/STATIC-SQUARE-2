const Eng = Matter.Engine;
const MW = Matter.World;
const MB = Matter.Bodies;

var MyEngine, MyWorld;

var ground,Body1;

function setup(){
    var canvas = createCanvas(600,400);
    MyEngine = Eng.create();
    world = MyEngine.world;

    var property = {
        isStatic : true
    }

    ground = MB.rectangle(300,400,600,20, property);
    MW.add(world, ground);
    console.log(ground)

    Box1 = new Box(330,100,100,100);
    

   Box2 = new Box(300,200,60,100);
   

    ball = MB.circle(400,200,20);
    MW.add(world,ball);
}

function draw(){
    background(0);
    Eng.update(MyEngine);
    push();
    fill("green");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 600, 20);
    pop();

    Box1.display();

   Box2.display();

    
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20);

   
}