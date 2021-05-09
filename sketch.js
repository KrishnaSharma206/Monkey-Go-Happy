
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
var banGroup, bagGroup;
var gss = 0;
var play = 0;
var end = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  banGroup = createGroup();
  bagGroup = createGroup();
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  //ground.x = ground.width / 2;
  stroke("white");
  textSize(20);
  fill("white");
}


function draw() {
  background("white");
  stroke("black");
  textSize(20);
  fill("black");
  if(ground.x < 0)
  {
    ground.x = 400;
  }
  monkey.velocityY += 0.5;
  if(gss === play)
  {
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
  if(keyDown("space") && ((monkey.y === 314.8) || (monkey.y === 314.3)) ||  monkey.isTouching(ground))
  {
    monkey.velocityY -= 12;  
  }
  //if(ground.x === (ground.width/2))
  //{
    //ground.x = 900;
    //Console.Log(ground.x);
  //}
  console.log(monkey.y);
  monkey.collide(ground);
  banana();
  rocky();
  if(monkey.isTouching(banGroup))
    {
      banGroup.destroyEach();
    }
  if(monkey.isTouching(bagGroup))
    {
      gss = end;
    }
  }  
  if(gss === end)
    {
      bagGroup.destroyEach();
      bagGroup.velocityXEach = 0;
      banGroup.velocityXEach = 0;
      banGroup.destroyEach();
      monkey.velocityX = 0;
      monkey.collide(ground);
      monkey.visible = false;
      text("GAME OVER", 200, 200);
    }
  drawSprites();
}
function banana()
{
  if(frameCount % 80 === 0)
    {
      var r = Math.round(random(120, 200));
      var ban = createSprite(400, r, 20, 20);
      ban.velocityX = -4;
      ban.addImage(bananaImage);
      ban.scale = 0.09;
      banGroup.add(ban);
      ban.setLifeTime = 100;
    }
}
function rocky()
{
  if(frameCount % 300 === 0)
    {
      var rody = createSprite(400, 320, 20, 20);
      rody.velocityX = -4;
      rody.addImage(obstaceImage);
      rody.scale = 0.2;
      bagGroup.add(rody);
      rody.setLifeTime = 100;
    }
}