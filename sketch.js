var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudGroup, cloudImage;
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var PLAY = 1;
var END=0;
var gameState= PLAY;
var gameOver,restart, overI,restartI;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
   obstacle2=loadImage("obstacle2.png");
   obstacle3=loadImage("obstacle3.png");
   obstacle4=loadImage("obstacle4.png");
   obstacle5=loadImage("obstacle5.png");
   obstacle6=loadImage("obstacle6.png");
   overI=loadImage("gameOver.png");
  restartI=loadImage("restart.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudGroup = new Group();
  obstacleGroup = new Group();
   gameOver = createSprite(200,150,20,20);
restart = createSprite(200,170,20,20);
//gameOver.addImage("gameOver",overI);
//gameOver.scale = 0.5;
//restart.addImage("restart",restartI);
//restart.scale = 0.5;

//gameOver.visible = false;
//restart.visible = false;
  
  

}

function draw() {
  background(120);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
   var rand = Math.round(random(1,6));
    console.log(rand);
   // obstacle.setAnimation("obstacle" + rand);
    switch(rand){
    
      case 1: obstacle.addImage(obstacle1);
        break;
         case 2: obstacle.addImage(obstacle2);
        break;
         case 3: obstacle.addImage(obstacle3);
        break;
         case 4: obstacle.addImage(obstacle4);
        break;
         case 5: obstacle.addImage(obstacle5);
        break;
         case 6: obstacle.addImage(obstacle6);
        break;
        default : break;
    
  }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,150,40,10);
    cloud.y = random(90,120);
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    cloudGroup.add(cloud);
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}
  
