class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("polygon.png");
      this.Visibility = 255;
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 5){
      super.display();
      }
      else{
        World.remove(world,this.body);
        this.Visibility = this.Visibility - 5;
        push();
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
  };
  