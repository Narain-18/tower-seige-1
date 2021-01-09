const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hex1,plat,box1;



function preload() {
    backgroundImg = loadImage("Sprites/28.jpg");
}

function setup(){
var canvas = createCanvas(1900,900);
engine = Engine.create();
world = engine.world;

hex1 = new Hexa(200,390,70,70);
fill("cyan");
box1 = new Boxclass(100,100,100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    hex1.display();
    box1.display();
}