var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, ground_img
var banana, bananaGroup, bananaIMG
var obstacle, obstacleGroup, obstacleIMG
var iground
var PLAY=1
var END=0
var gameState=1
function preload(){
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey_img=loadAnimation("sprite_1.png","sprite_2.png", "sprite_3.png","sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  ground_img =loadImage("ground2.png");
  bananaIMG = loadImage("banana.png");
  obstacleIMG=loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400)
  ground=createSprite(300,375,20,20);
  ground.addImage("g",ground_img);
  ground.scale=1;
  ground.velocityX=-7;
  monkey=createSprite(80,330,20,20);
  monkey.addAnimation("m",monkey_img);
  monkey.scale=0.17;
  iground=createSprite(300,380,600,5)
  iground.visible=false
  bananaGroup = new Group;
  obstacleGroup=new Group;
}


function draw() {
  background(220);
  
  if(gameState===1){
    if(ground.x<0){
      ground.x=(ground.width)/2
    }

    if(keyDown("space") && monkey.y===325.31){
      monkey.velocityY=-16  
    }
    monkey.velocityY=monkey.velocityY+0.8
    drop();
    d2();
    if(obstacleGroup.isTouching(monkey)){
      gameState=0;
  }
  }
  
  monkey.collide(iground) 
  
  console.log(monkey.y)
 
  
  if(gameState===0){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    ground.velocityX=0;
  }
  
  
  drawSprites();
}

function drop(){
  if(frameCount % 80===0){
    banana=createSprite(600,random(120,200),20,20)
    banana.addImage("b",bananaIMG);
    banana.scale=0.1;
    banana.velocityX=-7;
    banana.lifetime=100;
    bananaGroup.add(banana);
}

}

function d2(){
  if(frameCount % 60===0){
    obstacle=createSprite(600,360,20,20)
    obstacle.velocityX=-7
    obstacle.scale=0.125
    obstacle.addImage("o",obstacleIMG);
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
  
  
  
}



