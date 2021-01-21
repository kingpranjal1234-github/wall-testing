var car,wall,thickness;
var speed,wieght
var damage;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

speed=random(223,321);
wieght=random(30,52);
bullet=createSprite(50,200,40,10);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="white";
bullet.velocityX=speed;

thickness=random(22,83);
          
}

function draw() {
  background(255,255,255);  
 
  
    
    
    
    
    
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
  
var damage= 0.5 * wieght * speed * speed/(thickness * thickness * thickness);

if(damage>10){
  bullet.shapeColor="red";
}
if(damage<10){
  bullet.shapeColor="green";
}


}






 drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true 
}
return false;





}