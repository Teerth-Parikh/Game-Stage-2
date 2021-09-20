class Gojira {
    constructor(x, y, width, height, gojiraPos, GojiraAnimation) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        label: "godzilla"
      };
      this.animation = GojiraAnimation;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      this.gojiraPosition = gojiraPos;
      this.isBroken = false;
  
      World.add(world, this.body);
    }
    animate() {
      this.speed += 0.05 % 1.1;
    }
  
    remove(index) {
      this.animation = GojiraAnimation;
      this.speed = 0.05;
      this.width = 300;
      this.height = 300;
      this.isBroken = true;
      setTimeout(() => {
        Matter.World.remove(world, godzilla[index].body);
        godzilla.splice(index, 1);
      }, 2000);
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      noTint();
      pop();
    }
  }