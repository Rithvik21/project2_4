const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    sand = new Sand(800, 300);
    sand2 = new Sand(700, 300);
    sand3 = new Sand(1000, 300);
    sand4 = new Sand(200, 300);
    rubber = new Rubber(600, 300, 50);
    stone = new Stone(400, 300);
    iron = new Iron(100, 300);
    coal = new Coal(1100, 300);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    sand.display();
    sand2.display();
    sand3.display();
    sand4.display();
    rubber.display();
    stone.display();
    iron.display();
    coal.display();
 
}