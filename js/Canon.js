class Cannon {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      //this.image = loadImage("Cannon 5.png");
    }

    display() {
      
      if (keyIsDown(RIGHT_ARROW)) { //&& this.angle < 0.35) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW)) { //&& this.angle > -1.45) {
        this.angle -= 0.02;
      }
  
      fill("#676e6a");
      //fill("#B87333");
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(10, -25, 150, 50);
      pop();
      arc(120,210,150,150,180,PI);
      
      //circle(10,20,5);
      //image(this.image,60,25,150,50);

      // rotate(this.angle);
     // rect(0, 0, this.width, this.height);
     // pop();
      //arc(0, 0, 180, 230, PI, TWO_PI);
     // arc(this.x , this.y, 600, 600, PI, TWO_PI);
      //arc(50, 50, 500, 700, 0, PI, TWO_PI);
      fill("#FFD700");
      //rect(80,85,10,50);
      //rect(100,85,10,50);
      noFill();
      
    }
  }