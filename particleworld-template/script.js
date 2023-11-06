// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 200; // Decide the initial number of particles.

let particles1 = [];
let particles2 = [];

function setup() { 
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles1[i] = new Particle(random(0,width/2), random(height),1);
  }


  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles2[i] = new Particle(random(width/2,width), random(height),-1);
  }
 
}

function draw() {
  let brightness = map(mouseX, 0, width, 0, 255);
  background(brightness);
  
  // update and display
  for (let i = 0; i < particles1.length; i++) {
    let p = particles1[i];
    p.update();
    p.display();
  }
  for (let i = 0; i < particles2.length; i++) {
    let p = particles2[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY, dir) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(1,15) * dir;
    this.ySpd = random(-2,2);
    this.color = color(random(255),random(255),random(255));
    this.dir = dir;


  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.xSpd;
    this.y += this.ySpd;
    
    if (this.x < width/2 && this.dir == -1){
     this.x = width;
   }
   if (this.x > width/2 && this.dir == 1){
    this.x = 0;
   }
   if (this.y < 0 || this.y > height){
    this.y = random(height);
  }
  }
  display() {
    // particle's appearance
    
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();
    beginShape();
    vertex(-5, 5);
    vertex(0, 17.5);
    vertex(5, 5);
    vertex(17.5, 0);
    vertex(5, -4);
    vertex(0, -17.5);
    vertex(-5, -4);
    vertex(-17.5, 0);
    endShape(CLOSE);
    pop();
  }
}
