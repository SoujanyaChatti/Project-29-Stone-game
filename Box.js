class Box{
    constructor(x, y, width, height){
      var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.1
      }
    this.body=Bodies.rectangle(x,y,40,40,options);
    this.width=40;
    this.height=40;
    World.add(world,this.body);

    }
  display(){
  
  
   
    
    rectMode(CENTER);
  fill ("yellow");
    rect(this.body.position.x,this.body.position.y, this.width, this.height);
   
  }
};

 