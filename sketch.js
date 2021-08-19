var track, scrol
var runner, run
var edges


function preload(){
  //pre-load images
  scrol = loadImage("path.png")
  run = loadAnimation("runner-1.png", "runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200)
  track.addImage(scrol)
  track.velocityY = 5

  runner = createSprite(300, 300)
  runner.addAnimation("running", run)
  runner.scale = 0.09
}
function draw() {
  background(0);

if (track.y = 500){
  track.y = -100
}

runner.x = mouseX


if (runner.x < 100){
  runner.x = 100
}

if (runner.x > 300){
  runner.x = 300
}

  drawSprites()
}
