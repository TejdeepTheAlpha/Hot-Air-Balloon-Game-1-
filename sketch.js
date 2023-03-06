var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png");
 balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}
function setup(){
  createCanvas(400,400);
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.2;
bottomGround = createSprite(200,290,800,20);
bottomGround.visible = false;
topGround = createSprite(200,10,800,20);
topGround.visible = false;
balloon = createSprite(100,200,20,20);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
}

function draw(){
  background("black");
if(keyDown("space")){
  balloon.velocityY = -6;
}
balloon.velocityY += 2;
Bar ();
drawSprites();
}

function Bar() 
{
        if(World.frameCount % 60 === 0)
        {
          var bar = createSprite(400,200,10,800);
         bar.velocityX = -6
         bar.depth = balloon.depth;
         bar.lifetime = 70;
         bar.visible = false;
        }
}


