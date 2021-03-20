var canvas;
var music;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(200,200,40,50);
    surface1.shapeColor = "green";
    surface2 = createSprite(200,200,20,50);
    surface2.shapeColor = "green";
    surface3 = createSprite(200,200,10,50);
    surface3.shapeColor = "green";
    surface4 = createSprite(200,200,50,50);
    surface4.shapeColor = "green";


    //create box sprite and give velocity
    Box = createSprite(400,200,50,50);
    Box.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Box.x = mouseX;
    Box.y = mouseY;
    


    //add condition to check if box touching surface and make it box
    if(Box.x-surface1.x<Box.width/2+surface1.width/2&&surface1.x-Box.x<Box.width/2+surface1.width/2&&Box.y-surface1.y<Box.height/2+surface1.height/2&&surface1.y-Box.y<Box.height/2+surface1.height/2){
        Box.shapeColor = "purple";
        surface1.shapeColor = "red";
        surface2.shapeColor = "pink";
        surface3.shapeColor = "blue";
        surface4.shapeColor = "yellow";
      }
      else{
        Box.shapeColor = "green";
        surface1.shapeColor = "green";
        surface2.shapeColor = "green";
        surface3.shapeColor = "green";
        surface4.shapeColor = "green";
      }
      
}
