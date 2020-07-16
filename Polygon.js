class stone{
    constructor(x,y,radius){
        var options={
        isStatic:false,
        density:0.8
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
       this.image=loadImage("stone.jpg");
       World.add(world,this.body);
    }
display(){
    imageMode(CENTER);
    image (this.image,this.body.position.x,this.body.position.y,40,40)
}
}