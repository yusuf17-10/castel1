const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground1;
var log1,log2,log3,log4,log5,log6,log7,log8,log9;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var option={
        isStatic:true
    }

    ground1= Bodies.polygon(175,290,3,28);
    World.add(world,ground1);
 
    fill("white");


    console.log(ground1.vertices[0].x);

    log1 = new Castel(70,350,40,300);
    log2 = new Castel(270,350,15,400);

    log3 = new Castel(40,350,15,400);
    log4 = new Castel(110,350,40,200);

    
    log5 = new Castel(155,350,50,150);
    
    log6 = new Castel(240,350,40,300);
    log7 = new Castel(200,350,40,200);

    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    var pos=ground1.vertices;
    Engine.update(engine);

    triangle(ground1.vertices[0].x,ground1.vertices[0].y,ground1.vertices[1].x,ground1.vertices[1].y,ground1.vertices[2].x,ground1.vertices[2].y);

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    
    

    ground.display();
    drawSprites();
}