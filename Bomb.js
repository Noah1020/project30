class Bomb extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("polygon.png");
      this.Visibility = 255;
    }
  
  };