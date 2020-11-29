const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,100);
    box2 = new Box(240,100,50,90);
    box3 = new Box(280,200,50,80)
    box4 = new Box(280,200,50,70)
    box5 = new Box(280,200,50,60)
    ground = new Ground(200,height,900,20)
}

function draw(){
    background("red");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
}