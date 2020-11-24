var bullet;
var wall;
var speed;
var weight;
var thikness;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";

  thikness = random(22, 83);

  wall = createSprite(1200, 200, thikness, height/2);
  wall.shapeColor = color(80, 80, 80);

  speed = random(223, 321);

  weight = random(30, 52);

}

function draw() {
  background("black");

  bullet.velocityX = speed;

if(bullet.isTouching(wall)) {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thikness * thikness * thikness);

  if(damage >10) {
    wall.shapeColor = "green";
  }
  else{
    wall.shapeColor = color(80, 80, 80);
  }

  if(damage <10) {
    wall.shapeColor = "red";
  }
  else{
    wall.shapeColor = color(80, 80, 80);
  }
}

  
  
  drawSprites();
}