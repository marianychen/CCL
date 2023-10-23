// Left Arrow: Egg
// Up Arrow: Caterpillar
// Right Arrow: Cocoon
// Down Arrow: Butterfly

let state = "first";
let cPillarX = 0;
let angleB = 1;
let angleSpeed = 0.01;
let rScaler = 1;
let angle = 45;
let angle1 = 0;
let angle2 = 180;
let angleButter = 45;
let amplitude = 50;
let speed = 0.05;
let scaleFactor = 0.75;
let q, z;
let r, g, b;
let eggX1, eggX2, eggX3;
let eggY1, eggY2, eggY3;
let eggPlace = false;
let circles = [];
let maxCircles = 12;
let circleCount = true;
let shape = false;
let colorCoc;

function setup() {
  createCanvas(400, 400);
  background(0);
  q = 0;
  z = height / 2;
  colorCoc = color(255, 255, 255);
}

function draw() {
  if (state == "first") {
    push();
    r = random() * 255;
    g = random() * 255;
    b = random() * 255;
    fill(r, g, b);
    textSize(30);
    textAlign(CENTER);
    textFont("Georgia");
    text("METAMORPHOSIS", width / 2, height / 2 - 100);
    text("MAGIC", width / 2, height / 2 - 50);
    q = q + 10;
     fill(255, 255, 255);
  textSize(15);
  textAlign(LEFT);
  textFont("Georgia");
  text("LEFT ARROW: Stage 1 - Psychedelic Egg", 50, 200);
  text("UP ARROW: Stage 2 - Psychedelic Caterpillar", 50, 250);
  text("RIGHT ARROW: Stage 3 - Psychedelic Cocoon", 50, 300);
    text("DOWN ARROW: Stage 4 - Psychedelic Butterfly", 50, 350);

    z = height / 2 + sin(z * 0.3) * 100 - 140;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);

    q = q + 10;
    z = height / 2 + sin(z * 0.3) * 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);

    q = q + 10;
    z = height / 2 + sin(z * 0.3) * 100 + 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);

    q = q + 10;
    z = height / 2 + sin(z * 0.3) * 100 - 200;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
    pop();
  } else {
    if (state == "egg") {
      drawEgg();
    } else if (state == "caterpillar") {
      drawCaterpillar();
    } else if (state == "cocoon") {
      drawCocoon();
    } else if (state == "butterfly") {
      drawButterfly();
    }
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    state = "egg";
  } else if (keyCode == UP_ARROW) {
    state = "caterpillar";
  } else if (keyCode == RIGHT_ARROW) {
    state = "cocoon";
  } else if (keyCode == DOWN_ARROW) {
    state = "butterfly";
  }
}

//background(0);

function drawEgg(q, z) {
  background(0);
  z = height / 2;
  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 140;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 + 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 200;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  //Heading
  push();
  r = random() * 255;
  g = random() * 255;
  b = random() * 255;
  fill(r, g, b);

  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("STAGE 1: PSYCHEDELIC EGG", width / 2, 40);
  pop();

  fill(255, 255, 255);
  textSize(14);
  textAlign(CENTER);
  textFont("Georgia");
  text("Hover mouse over leaf & press ENTER to lay egg.", width / 2, 75);

  textSize(14);
  textAlign(CENTER);
  textFont("Georgia");
  text("Click on the egg to hatch a caterpillar.", width / 2, 380);

  // Leaf shape
  push();
  translate(width / 2, height / 2 + 100);

  // Stem
  fill(139, 69, 19);
  noStroke();
  rect(-5, -7, 8, 60);

  // Leaf
  fill(0, 128, 0);
  noStroke();
  beginShape();
  vertex(0, 0);
  bezierVertex(-30, -50, -150, -100, 0, -200);
  endShape(CLOSE);
  beginShape();
  vertex(0, 0);
  bezierVertex(30, -50, 150, -100, 0, -200);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(1.5);
  line(0, -20, 0, -180);

  pop();

  // Egg
  push();
  r = random() * 255;
  g = random() * 255;
  b = random() * 255;
  stroke(r, g, b);
  strokeWeight(3);
  fill(255, 255, 230);

  if (keyIsPressed) {
    if (keyCode == ENTER && eggPlace == false) {
      ellipse(eggX1, eggY1, 40, 60);
      eggX1 = mouseX;
      eggY1 = mouseY;
      eggPlace = true;
    }
  }

  ellipse(eggX1, eggY1, 40, 60);

  //ellipse(width / 2, height / 2 + 30, 10, 20);
  //ellipse(width / 2 + 25, height / 2 + 10, 10, 20);
  //ellipse(width / 2 - 25, height / 2 + 10, 10, 20);

  pop();

  if (
    mouseIsPressed &&
    mouseX >= eggX1 - 20 &&
    mouseX <= eggX1 + 20 &&
    mouseY >= eggY1 - 30 &&
    mouseY <= eggY1 + 30
  ) {
    drawCaterpillar();
    state = "caterpillar";
  }
}

cPillarX += 0.1;

// Caterpillar

function drawCaterpillar(q, z) {
  background(0);

  z = height / 2;
  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 140;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 + 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 200;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }
  //Heading
  push();
  r = random() * 255;
  g = random() * 255;
  b = random() * 255;
  fill(r, g, b);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("STAGE 2: PSYCHEDELIC CATERPILLAR", width / 2, 40);
  pop();

  textSize(14);
  textAlign(CENTER);
  textFont("Georgia");
  text("Click on the leaf 12x to feed the caterpillar.", width / 2, 70);
  text(
    "Press RIGHT ARROW for the next stage.",
    width / 2,
    370
  );
  // Leaf shape
  push();

  translate(width / 2 - 150, height / 2 + 100);

  rotate(angle);

  // Stem
  fill(139, 69, 19);
  noStroke();
  rect(-5, -7, 8, 60);

  // Leaf
  fill(0, 128, 0);
  noStroke();
  beginShape();
  vertex(0, 0);
  bezierVertex(-30, -50, -200, -100, 0, -400);
  endShape(CLOSE);
  beginShape();
  vertex(0, 0);
  bezierVertex(30, -50, 200, -100, 0, -400);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(1.5);
  line(0, -50, 0, -280);

  pop();

  // food
  if (!shape && circles.length < maxCircles) {
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      //fill(0,102,0);
      fill(0, 0, 0);
      noStroke();
      ellipse(circle.x, circle.y, 10, 20);
    }
  }else{

    angleB += angleSpeed;
    r = map(sin(angleB), -1, 1, 0, 255);
    b = map(cos(angleB), -1, 1, 0, 255);
    g = 100;
    stroke(r, g, b);
    strokeWeight(2);
    cPillarX += 0.05;

    push();

    //Legs
    line(110 + cPillarX, 275, 110 + cPillarX, 285);
    line(130 + cPillarX, 265, 130 + cPillarX, 280);
    line(150 + cPillarX, 275, 150 + cPillarX, 285);
    line(170 + cPillarX, 275, 170 + cPillarX, 280);
    line(190 + cPillarX, 265, 190 + cPillarX, 275);
    line(210 + cPillarX, 265, 210 + cPillarX, 275);
    line(230 + cPillarX, 275, 230 + cPillarX, 285);
    line(250 + cPillarX, 265, 250 + cPillarX, 280);
    line(280 + cPillarX, 285, 280 + cPillarX, 295);
    line(305 + cPillarX, 280, 305 + cPillarX, 290);

    // Circles
    push();
    strokeWeight(1);
    push();
    angleB += angleSpeed;
    r = map(sin(angleB), -1, 1, 0, 255);
    b = map(cos(angleB), -1, 1, 0, 255);
    g = 100;
    fill(r, g, b);
    stroke(0);
    circle(60 + cPillarX, 225, 30);
    circle(85 + cPillarX, 240, 40);
    circle(120 + cPillarX, 250, 50);
    circle(160 + cPillarX, 245, 60);
    circle(200 + cPillarX, 240, 60);
    circle(240 + cPillarX, 245, 60);
    circle(290 + cPillarX, 250, 70);
    circle(340 + cPillarX, 230, 80);

    pop();

    // Caterpillar's head
    push();
    fill(0);
    circle(355 + cPillarX, 225, 15);
    line(320 + cPillarX, 195, 320 + cPillarX, 180);
    line(340 + cPillarX, 190, 340 + cPillarX, 180);
    pop();

    //pop();

    if (cPillarX + 100 > width) {
      cPillarX = -100;
    }
    shape = true;
  }
  //push();
}

function mousePressed() {
  if (circleCount && circles.length < maxCircles) {
    let newCircle = {
      x: mouseX,
      y: mouseY,
    };
    circles.push(newCircle);

    if (circles.length == maxCircles) {
      circleCount = false;
    }
  }
  
}

//Cocoon

function drawCocoon() {
  background(0);

  z = height / 2;
  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 140;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 + 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 200;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  //Heading
  push();
  r = random() * 255;
  g = random() * 255;
  b = random() * 255;
  fill(r, g, b);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("STAGE 3: PSYCHEDELIC COCOON", width / 2, 70);
  pop();

  //Tree Branch
  push();
  stroke(102, 51, 0);
  strokeWeight(30);
  line(0, height / 2, 400, height / 2 - 100);

  triangle(
    width / 2,
    height / 2 - 20,
    width / 2 - 2,
    height / 2 - 25,
    width / 2 + 5,
    height / 2 - 30
  );
  pop();

  stroke(r, g, b);

  if (mouseIsPressed) {
    if (mouseX > 10 && mouseX < 50 && mouseY > 300 && mouseY < 340) {
      // yellow
      r = 204;
      g = 204;
      b = 0;
      colorCoc = color(r, g, b);
    } else if (mouseX > 10 && mouseX < 50 && mouseY > 350 && mouseY < 390) {
      r = 41;
      g = 163;
      b = 41;
      colorCoc = color(r, g, b);
    } else if (mouseX > 10 && mouseX < 50 && mouseY > 250 && mouseY < 290) {
      r = random()*255;
      g = random()*255;
      b = random()*255;
      colorCoc = color(r,g,b);
  }
  }

  fill(colorCoc);
  ellipse(width / 2, height / 2 + 85, 120, 170);

  stroke(255);
  fill(204, 204, 0);
  rect(10, 300, 40, 40);
  fill(41, 163, 41);
  rect(10, 350, 40, 40); 
  fill(0,0,0);
  rect(10, 250, 40, 40);
  strokeWeight(2);
  stroke(r, g, b);
  textSize(30);
  fill(255,255,255);
  textAlign(CENTER);
  textFont("Georgia");
  noStroke();
  text("?", 30, 280);

  stroke(255, 255, 255);
  curve(104, 215, 185, 215, 220, 215, 328, 215);
  curve(104, 236, 160, 253, 240, 253, 308, 254);
  curve(104, 336, 170, 353, 230, 353, 300, 354);
  curve(104, 300, 155, 300, 245, 300, 328, 300);
  
  push();
  textSize(14);
  textAlign(CENTER);
  textFont("Georgia");
  noStroke();
  fill(255,255,255);
  text("Choose your cocoon color.", width/2, 100);
  text(
    "Press DOWN ARROW for the next stage.",
    width / 2,
    390
  );
  pop();
  
  }

//Butterfly ---------
function drawButterfly() {
  background(0);
  z = height / 2;
  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 140;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 + 100;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  for (q = 0; q < 400; q += 30) {
    z = height / 2 + sin(z * 0.3) * 100 - 200;
    noStroke();
    fill(255);
    ellipse(q, z, 3, 3);
  }

  //Heading
  push();
  r = random() * 255;
  g = random() * 255;
  b = random() * 255;
  fill(r, g, b);
  textSize(20);
  textAlign(CENTER);
  textFont("Georgia");
  text("STAGE 4: PSYCHEDELIC BUTTERFLY", width / 2, 70);
  pop();

  scale(scaleFactor);

  let xOffset = amplitude * sin(angleB);
  translate(xOffset + 50, 0 + 50);

  
  //Antenna
  stroke(r, g, b);
  line(191, 110, 160, 69);
  line(208, 110, 230, 69);

  angleB += angleSpeed;
  r = map(sin(angleB), -1, 1, 0, 255);
  b = map(cos(angleB), -1, 1, 0, 255);
  g = 0;
  fill(r, g, b);
  noStroke();

  //Wing left bottom
  beginShape();
  curveVertex(182, 212);
  curveVertex(60, 256);
  curveVertex(38, 356);
  curveVertex(127, 362);
  curveVertex(183, 287);
  endShape(CLOSE);

  push();
  angleB += angleSpeed;
  r = map(sin(angleB), -1, 1, 0, 255);
  b = map(cos(angleB), -1, 1, 0, 255);
  g = 100;
  fill(r, g, b);
  noStroke();

  beginShape();
  curveVertex(182, 212);
  curveVertex(60 + 20, 256);
  curveVertex(38 + 20, 356 - 20);
  curveVertex(127, 362 - 25);
  curveVertex(183, 287 - 30);
  endShape(CLOSE);
  pop();

  //wing right bottom
  beginShape();
  curveVertex(width - 182, 212);
  curveVertex(width - 60, 256);
  curveVertex(width - 38, 356);
  curveVertex(width - 127, 362);
  curveVertex(width - 183, 287);
  endShape(CLOSE);

  push();
  angleB += angleSpeed;
  r = map(sin(angleB), -1, 1, 0, 255);
  b = map(cos(angleB), -1, 1, 0, 255);
  g = 100;
  fill(r, g, b);
  noStroke();
  beginShape();
  curveVertex(width - 182, 212);
  curveVertex(width - 60 - 20, 256);
  curveVertex(width - 38 - 20, 356 - 20);
  curveVertex(width - 127, 362 - 25);
  curveVertex(width - 183, 287 - 30);
  endShape(CLOSE);
  pop();

  //wing left top
  beginShape();
  curveVertex(191, 130);
  curveVertex(111, 95);
  curveVertex(20, 70);
  curveVertex(40, 150);
  curveVertex(50, 250);
  curveVertex(183, 217);
  endShape(CLOSE);

  beginShape();
  curveVertex(191, 130);
  curveVertex(111, 95);
  curveVertex(20, 70);
  curveVertex(40, 150);
  curveVertex(50, 250);
  curveVertex(183, 217);
  endShape(CLOSE);

  push();
  angleB += angleSpeed;
  r = map(sin(angleB), -1, 1, 0, 255);
  b = map(cos(angleB), -1, 1, 0, 255);
  g = 100;
  fill(r, g, b);
  noStroke();
  beginShape();
  curveVertex(191, 130 + 20);
  curveVertex(111, 95 + 20);
  curveVertex(20 + 20, 70 + 20);
  curveVertex(40 + 20, 150);
  curveVertex(50 + 20, 250 - 20);
  curveVertex(183, 217 - 20);
  endShape(CLOSE);
  pop();

  //wing right top
  beginShape();
  curveVertex(width - 191, 130);
  curveVertex(width - 111, 95);
  curveVertex(width - 20, 70);
  curveVertex(width - 40, 150);
  curveVertex(width - 50, 250);
  curveVertex(width - 183, 217);
  endShape(CLOSE);

  push();
  //angleB += angleSpeed;
  r = map(sin(angleB), -1, 1, 0, 255);
  b = map(cos(angleB), -1, 1, 0, 255);
  g = 100;
  fill(r, g, b);
  noStroke();
  beginShape();
  curveVertex(width - 191, 130 + 20);
  curveVertex(width - 111, 95 + 20);
  curveVertex(width - 20 - 20, 70 + 20);
  curveVertex(width - 40 - 20, 150);
  curveVertex(width - 50 - 20, 250 - 20);
  curveVertex(width - 183, 217 - 20);
  endShape(CLOSE);
  pop();

  //Antenna
  line(191, 110, 160, 69);
  line(208, 110, 230, 69);

  //body
  ellipse(width / 2, height / 2 + 30, 35, 200);
  //head
  ellipse(width / 2, height / 2 - 75, 35, 35);
  angleButter += speed;

  push();

  pop();
  if (!shape && circles.length < maxCircles) {
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      r = map(sin(angleB), -1, 1, 0, 255);
      b = map(cos(angleB), -1, 1, 0, 255);
      g = 0;
      fill(r,g,b);
      noStroke();
      ellipse(circle.x, circle.y, 20, 30);
    }
  }
  push();
  translate(-xOffset + 50, 0 + 50);
  

}
  
