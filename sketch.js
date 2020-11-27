const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box7,box8
var ground,ball,slingshot




function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,780,1600,20);
    
    box1 = new Box (1080,740,80,80)
    box2 = new Box (1080,660,80,80)
    box3 = new Box (1080,580,80,80)
    box4 = new Box (1080,500,80,80)

    box5 = new Box (1000,740,80,80)
    box6 = new Box (1000,660,80,80)
    box7 = new Box (1000,580,80,80)
    box8 = new Box (1000,500,80,80)

    ball = new Ball(800,600,60)

    
    slingshot = new Slingshot(ball.body,{x:800, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();

   
    ball.display();
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();

   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


// function mouseReleased(){
//     slingshot.fly();
// }

// function keyPressed(){
//     if(keyCode === 32){
//         slingshot.attach(bird.body);
//     }
// }