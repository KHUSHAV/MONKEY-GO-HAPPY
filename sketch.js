//creating monkey variables
var monkey , monkey_running;

//creating banana variables
var banana ,bananaImage;

//creating obstacle variables
var obstacle, obstacleImage;

//creating groups
var BananaGroup, ObstacleGroup;

//creating ground variables
var ground, invisibleGround, groundImage;

//creating score variable
var score, survivalTime ;

function preload(){
  
  //adding monkey its animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //adding banana image
  bananaImage = loadImage("banana.png");
  
  //adding obstacle image 
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,330);
  
  monkey = createSprite(60,300,40,60);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.08;

  ground = createSprite(400,300,900,10);
  ground.velocityX = -4;
  
  BananaGroup = new Group();
  ObstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0;
  
}


function draw() {
  background (color(50,250,145));
  
  strokeWeight(3);
  stroke("yellow");
  textSize(20);
  fill("red");
  textSize(23)
  text("Score : "+ score,280,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/300);
  text("Survival Time : " + survivalTime,50,50)

   ground.x = ground.width/2 ;    
    
  if((keyDown("SPACE")) && monkey.y  >= height-70) {
      monkey.velocityY = -15;
       
    }
 monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  spawnBananas();
  spawnObstacles();
  
  
  drawSprites();
}

function spawnBananas(){

  if (frameCount % 120 === 0) {
    var banana = createSprite(300,200,40,10);
    banana.y = Math.round(random(130,220));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -3;
    banana.lifetime = 300;
    BananaGroup.add(banana);
  }
}

function spawnObstacles(){
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300,277,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    ObstacleGroup.add(obstacle);
}
}