var path , pathImage
var boy , boy_moving

function preload(){
  //pre-load images

pathImage = loadImage("path.png");


boy_moving = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(800,800);
 
//create the path for the boy to run on
path = createSprite(400,400,50,50);
path.addImage("path",pathImage);
path.y = path.height / 2;
path.scale = 2;
path.velocityY = 6;

invisibleboundary1 = createSprite(100,350,10,750);
invisibleboundary2 = createSprite(700,350,10,750);
invisibleboundary1.visible = false;
invisibleboundary2.visible = false;


//create the boy
boy = createSprite(400,400,20,20);
boy.addAnimation("boy",boy_moving);
boy.scale = 0.10;




  



}

function draw() {
  background("blue");

  //add the condition to reset the path
  if(path.y > 800){
     path.y = path.height / 2
  }
  
// add the code to collide boy
boy.collide(invisibleboundary1);
boy.collide(invisibleboundary2)

//make the boy move left and right using mouse
//boy.x = World.mouseX;



if(keyDown("left")){
boy.x = boy.x-10
}

if(keyDown("right")){
  boy.x = boy.x + 10
}

  drawSprites();
}
