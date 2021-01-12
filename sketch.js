function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "pink";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "pink";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5
}

function draw() {
  background(0);
  
  bouncy(movingRect, fixedRect);

  drawSprites();
}
