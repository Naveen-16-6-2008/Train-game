var train,trainimg;
var track,trackimg;
var invisibleGround;
var bg,bgimg;
var distance = 0;
var gamestate="play";
//var database;
function preload(){
    trainimg = loadImage("train.png");
    //trackimg = loadImage("track.png");
    //trainsound = loadSound("metro.mp3");
    bgimg = loadImage("bg.jpg");
}

function setup(){
    createCanvas(1350,800);
    //database = firebase.database();

    

  

bg = createSprite(0,0,400,400);
bg.addImage(bgimg);
//bg.x = bg.width/1.5;
bg.scale = 2.7;
//bg.velocityX=-2;
train = createSprite(10,700,100,100);
train.addImage(trainimg);
train.scale = 1;
}

function draw(){
    
   background("green");
   bg.velocityX=-2;

   if (bg.x < 0){
    bg.x = bg.width/2;
  }
   
  //text("Press right arrow to move the train and B to stop the train",440,150)


  if (keyIsDown(RIGHT_ARROW)){
    bg.velocityX = -(50)
    
    //trainsound.play();
    distance=distance+50;
   
  }
  



camera.position.x = train.x+250;

    drawSprites();
    if(gamestate==="play"){
    textSize(30);
   fill("red");
   text("Train Game",200,100);
   textSize(30);
  text("Press right arrow to increase the train speed",10,150); 
    }

  if(distance>4000){
    bg.velocityX = 0;
    gamestate="end";
    textSize(30);
   fill("red");
    text("Game Over",200,100);
    }
}


