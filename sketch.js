var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(160,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(600,350,900,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;

score=0;
  
}


function draw() {
background(200);
  
   text("Score: "+ score, 450,50);
  if(gameState === PLAY){
    food();
   stone();
    
   score = score + Math.round(getFrameRate()/60);
  if(ground.x<0){
     ground.x=ground.width/2;
  }
   if(keyDown("space")) {
        monkey.velocityY = -12;       
    }
  monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
  }
 drawSprites ();
}
function food(){
  if (frameCount % 80 === 0){
   var fruit = createSprite(600,Math.round(random(120,200)),10,40);
    fruit.addImage(bananaImage);
    fruit.scale=0.1;
    fruit.velocityX=-3;
    fruit.lifetime=-1;
    monkey.depth=fruit.depth+1;
  }

}
function stone(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(300,310,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
  
 }
}





