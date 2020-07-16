const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
 var engine,world,ground;
 var slingshot1,stone1,bgim;
 

function setup() {
  createCanvas(1500,700);
 
  engine = Engine.create();
    world = engine.world;

  ground=new Ground(750,660,1500,40);
  base1=new Ground(750,600,250,20);
  base2=new Ground(1250,250,200,20);
  base3=new Ground(350,200,180,20);
  //bottom row of the first stack/pyramid
  box2=new Box(710,580);
  box1=new Box2(670,580);
  box4=new Box(790,580);
  box3=new Box2(750,580);
  box5=new Box2(830,580);
  //second row of the first stack/pyramid
  box6=new Box2(690,530);
  box7=new Box(730,530);
  box8=new Box2(770,530)
  box9=new Box(810,530);
  //third row of the first stack/pyramid
  box10=new Box(710,490);
  box11=new Box2(750,490);
  box12=new Box(790,490);

//fourth row 
box13=new Box(730,440);
box14=new Box2(770,440);
//fifth
box15=new Box2(750,390);

//bottom row of the second pyramid
b1=new Box3(1230,210);
b2=new Box(1270,210);
b3=new Box3(1310,210);
b4=new Box(1190,210);

//row two of the second pyramid

b5=new Box3(1210,170);
b6=new Box(1250,170);
b7=new Box3(1290,170);

//row three of the second pyramid
 b8=new Box3(1230,130);
 b9=new Box(1270,130);
 b10=new Box(1250,90);


 //bottom row of the third pyramid
 b11=new Box3(350,180);
 b12=new Box2(310,180);
 b13=new Box2(390,180);

 //second row of the third pyramid
 b14=new Box2(330,140);
 b15=new Box3(370,140);
 b16=new Box3(350,100);

 stone1=new stone(100,100);

 slingshot1=new SlingShot(stone1.body,{x:180,y:460});
}

function draw() {
  background(255); 
  Engine.update(engine); 
 
  ground.display();
  base1.display();
  base2.display();
  base3.display();
  
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 box13.display();
 box14.display();
  box15.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  slingshot1.display();
  stone1.display();

  if(isTouching(box1.body,ground.body)){
    text("YOOO",100,100);
  }
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}
function isTouching(ob1,ob2){ if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 && 
  ob2.x - ob1.x < ob2.width/2 + ob1.width/2 && ob1.y - ob2.y < ob2.height/2 + ob1.height/2 && 
  ob2.y - ob1.y < ob2.height/2 + ob1.height/2) { return true; } else { return false; } }
