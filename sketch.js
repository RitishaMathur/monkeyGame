var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;


function preload(){
   monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey = createSprite(50,165,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.105
  
  ground = createSprite(200,190,600,10);
  ground.x = ground.width /2;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  //monkey.debug = true;
  
}

function draw() {
background("lightgreen");
 if (frameCount % 100 === 0){
      var obstacle = createSprite(600,165,10,40);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.15
      obstacle.velocityX = -(6 + score/100);
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle);
      //obstacle.debug = true;
      obstacle.setCollider("circle",0,0,160)
 }
  if(frameCount % 100 === 0){
    var banana = createSprite(600,55,10,40);
    banana.addImage(bananaImage);
    banana.scale = 0.15
    banana.velocityX = -(6 + score/100);
    banana.lifetime = 300;
    FoodGroup.add(banana);
  }
  if(obstacleGroup.isTouching(monkey)){
    score = 0;
    obstacleGroup.x = 600
    FoodGroup.x = 600
  }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score+1;
  }
  
  
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")&&monkey.y>100){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
drawSprites();  
}


