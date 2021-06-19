
function preload(){

  seaImg = loadImage(seaImg);
  shipImg1 = loadImage(shipImg1);
  shipImg2 = loadImage(shipImg2);
  shipImg3 = loadImage(shipImg3);
  shipImg4 = loadImage(shipImg4);
}


function setup(){
  createCanvas(400,400);

  spriteName.addImage(seaImg1);
  spriteName.addImage(shipImg1);
  spriteName.addImage(shipImg2);
  spriteName.addImage(shipImg3);
  spriteName.addImage(shipImg4);
  
}

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}