var newX =0;

function preload(){
  p_walking1= loadImage("images/shooter_player (1).png")
}
function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);

  platformGroup= new Group()
  player= new Player()
  ground= new Ground()
  for(var i=0; i<24; i++){
    platform= new Platform(newX)
    newX= newX+platform.width
platformGroup.add(platform.body)
  }
}
function draw()
{
  background(0);
  if(keyDown("right")){
    player.moveRight()
  }
  if(keyDown("left")){
    player.moveLeft()
  }
  if(keyDown("up")){
    player.moveUp()
  }
  player.gravity()

  player.body.collide(platformGroup)

  drawSprites()
  
}
