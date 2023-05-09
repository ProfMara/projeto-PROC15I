var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var pontos = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadAnimation("fimdeJogo.png");
}

function setup(){

   createCanvas(400,600);
  // criando fundo..
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //criando menino correndo
  boy = createSprite(70,580,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;

  //criando os grupos..
  cashG=new Group();
  diamondsG=new Group();
  jewelryG=new Group();
  swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;

    edges= createEdgeSprites();
    boy.collide(edges);

    //código para reiniciar o fundo
    if(path.y > 400 ){
      path.y = height/2;
    }

     createCash();
     createDiamonds();
     createjewelry();
     createSword();

  
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ pontos,10,30);
  

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 250;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}
