var playRoomImage,luandryRoomImage,houseImage, kitchenImage,livingRoomImage,bedroomImage, bathRoomImage;
var bg;
var gameState = 0
function preload(){
  playRoomImage =  loadImage("PlayRoom.jpg");
  luandryRoomImage =  loadImage("LuandryRoom.jpg");
  kitchenImage=  loadImage("Kitchen.jpg");
  livingRoomImage=  loadImage("LivingRoom.jpg ");
  bedroomImage=  loadImage("Bedroom.png");
  bathRoomImage=  loadImage("Bathroom.jpg");
  houseImage =  loadImage("bg.png");
  startButtonImage=loadImage("StartHere.png");
  nextButtonImage=loadImage("Next.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2+200,height/2)
  
  startButton = createSprite(350,height/2-100)
  startButton.addImage(startButtonImage);

  nextButton = createSprite(width-200, height-100)
  nextButton.addImage(nextButtonImage);
  nextButton.scale=0.5
  startButton.scale=1

}

function draw() {
  background("white");

  if (gameState===0){
    textSize(40) 
    fill("black")
    text("You have been kidnapped!!!!",100,200)
    text("To escape the house,",100,250)
    text("Find the clues hidden in each room",100,300)
    text("Good Luck",100,350)

    bg.addImage(houseImage);
    bg.scale=2.7

    nextButton.visible= false;

    if(mousePressedOver(startButton)){
      gameState=1
    }
  }

  //Luandry Room
  if (gameState===1){
    bg.x= width/2
    bg.y= height/2
    bg.addImage(luandryRoomImage);
    bg.scale=3.3

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=2
    }
  }

  // Living Room
  if (gameState===2){
    bg.x= width/2 
    bg.y= height/2+250
    bg.addImage(livingRoomImage);
    bg.scale=1.6

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=3
    }
  }

  // Kitchen
  if (gameState===3){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage( kitchenImage);
    bg.scale=2.2

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=4
    }
  }
  // Bathroom
  if (gameState===4){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage(bathRoomImage);
    bg.scale=2.2

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=5
    }
  }

  // Bedroom
  if (gameState===5){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage(bedroomImage);
    bg.scale=2.2

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=6
    }
  }

  // Play Room
  if (gameState===6){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage( playRoomImage);
    bg.scale=2.2

    startButton.visible= false;
    nextButton.visible= true;
    if(mousePressedOver(nextButton)){
      gameState=0
    }
  }

  
  drawSprites();
}