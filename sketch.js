var cat,cati,mousei,mouse,mouset,bgi,bg,mousey,caty;
function preload() {
    //load the images here
bgi = loadImage("garden.png");
cati = loadAnimation("cat1.png","cat2.png","cat4.png");
mousei = loadImage("mouse2.png");
mousey = loadImage("mouse3.png");
caty = loadAnimation("cat3.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400,20,20);
    bg.addImage("garden",bgi);
    cat = createSprite(750,600,20,20);
    cat . addAnimation("cat1",cati);
    
    cat.scale=0.15;
    mouse = createSprite(250,600,20,20);
    mouse.addImage("mouse3.png",mousei);
    mouse.scale=0.15;
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(up){

    cat.velocityX= -4;
    cat.changeAnimation("cat3",caty);
    


  //For moving and changing animation write code here


}
