var ground;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = createSprite(0,780,480,40);
  
}

function draw() {
  background(255,255,255);  



  
  drawSprites();
}