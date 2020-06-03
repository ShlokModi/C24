const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;
var box2, box3, box4, pig2, log2, ground, box5, log3, log4,bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,355,70,70);
    box2 = new Box(1000,355,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(900,365);
    log1 = new Log(900,310,270,PI/2);
    box3 = new Box(800,265,70,70);
    box4 = new Box(1000, 265, 70, 70);
    pig2 = new Pig(900,275);
    log2 = new Log(900,220,270,PI/2);
    box5 = new Box(900,175,70,70);
    log3 = new Log(850,175,130,PI/3);
    log4 = new Log(950,175,130,-PI/3);
    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    ground.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}