var dog;
var happyDog;
var dogImg;
var dogImg1;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
   dog = createSprite(250,250,40,40);
   dog.addImage(dogImg);
   dog.scale = 0.5;

   //this is how you assign firebase database to var database
   database = firebase.database();

   foodStock = database.ref('food');
   foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
 

  drawSprites();
   
  text("Note: Press UP_ARROW Key To Feed Yeontan Milk!", 100,30);
  
 
  text("FoodStock: " + foodS, 100,100);
  textSize(5);
  stroke("white");

}

function readStock(data){
foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}



