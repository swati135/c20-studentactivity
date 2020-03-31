var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(300,200,50,100);
  fixedRect.shapeColor= "green";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
    &&  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 )
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}