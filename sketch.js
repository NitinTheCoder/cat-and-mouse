var jerry1
var jerry2,jerry3

var garden

var tom,tom1
function preload() {
jerry1=loadAnimation("images/jerryOne.png");
jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerry3=loadAnimation("images/jerryFour.png");
tom1=loadAnimation("images/tomOne.png");
tom2=loadAnimation("images/tomTwo.png","images/tomThree.png");
tom3=loadAnimation("images/tomFour.png");
gardenImage=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
jerry=createSprite(200,600,30,10);
jerry.addAnimation("jerryOne",jerry1);
tom=createSprite(800,600,10,5);
tom.addAnimation("tomOne",tom1);
jerry.scale=0.15;
tom.scale=0.2;
//garden=createSprite(1000,800);
//garden.addImage("garden",gardenImage);



}

function draw() {

    background(gardenImage);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
    jerry.addAnimation("jerryThree",jerry3);
    jerry.changeAnimation("jerryThree",jerry3);
    tom.addAnimation("tomThree",tom3);
    tom.changeAnimation("tomThree",tom3);
    tom.scale=0.2
    tom.velocityX=0
    }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
  {
    tom.velocityX=-2;
    tom.scale=0.3;
    tom.addAnimation("tomTwo",tom2);
    tom.changeAnimation("tomTwo",tom2);
    jerry.addAnimation("jerryTwo",jerry2);
    jerry.changeAnimation("jerryTwo",jerry2);
  }
  
}
