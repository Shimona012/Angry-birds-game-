class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;

  }
display(){

  if(this.body.speed<2.5){

    super.display();

  }
else{
var pos=this.body.position;
  World.remove(world,this.body);
  push();
  this.Visiblity=this.Visiblity-5;
  tint(255,this.Visiblity);
  image(this.image,pos.x,pos.y,50,50);
  pop();
}

}
};