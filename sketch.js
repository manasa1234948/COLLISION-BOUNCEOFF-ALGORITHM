var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "pink";
  movingRect.debug = true;
  rect1=createSprite(150,100,50,80);
  rect1.shapeColor='wheat';
  rect2=createSprite(150,300,50,80);
  rect2.shapeColor='wheat';
rect1.velocityY=3;
rect2.velocityY=-3;
}

function draw() {
  background(255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(rect1,rect2)){
    rect1.shapeColor = 'yellow';
    rect2.shapeColor = "yellow";
  }
  else{
    rect1.shapeColor = "pink";   
    rect2.shapeColor = "pink";
  }
 bounceOff(rect1,rect2);
  drawSprites();
}

