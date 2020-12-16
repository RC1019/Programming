let beginX = 20.0; // Initial x-coordinate
let beginY = 100.0; // Initial y-coordinate
let endX = 570.0; // Final x-coordinate
let endY = 110.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 2; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = -0.1; // Percentage traveled (0.0 to 1.0)


function setup() {
  createCanvas(500, 500);
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(0, 1);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
 
  fill("#FC032C ");
      stroke("#F5F7F7");
      strokeWeight(10)
      ellipse(50,100,20,20);
      ellipse(200,200,20,20);
      ellipse(100,300,20,20);
      ellipse(400,200,20,20);
ellipse(500,100,20,20);
   textFont("Brush Script MT");
  textStyle(ITALIC);
  textAlign(CENTER);
  fill("#F50909");
  fill(255,35,255);
  text("I never miss",50,50)
  
  fill(255);
  ellipse(x, y, 10, 10);
}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
 