//declare variables
var sunX = 100;
var sunY = 50;
var sunset = 0;
function setup() {
  createCanvas(800, 400);
  frameRate(40);
}
function draw() {
  background("skyblue");
  noStroke();
  fill("yellow");
  circle(sunX, sunY, 70);
  // ground
  fill("green");
  rect(0, 350, 600, 100);
  //mountain function call
  mountain();
  mountaina();
  //sun movement
  if (sunY < height) {
    sunY = sunY + 1;
    sunset = sunset + 0.5;
  }
  //sunset effect
  fill(0, sunset);
  rect(0, 0, width, height);
  //Moon
  fill(255, sunset);
  circle(530, 50, 70);
}
//custom function
function mountain() {
  fill("rgb(22,21,21)");
  beginShape();
  vertex(400, 350);
  vertex(500, 200);
  vertex(600, 350);
  endShape(CLOSE);
}
function mountaina() {
  fill("#9E9E9E");
  beginShape();
  fill(91, 71, 110);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(213, 202, 255);
  strokeWeight(0);
  beginShape();
  endShape(CLOSE);
  //closer one
  fill(174, 139, 3);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(231, 241, 255);
  strokeWeight(1);
  beginShape();
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);
  //HILLS
  fill(60, 145, 4);
  ellipse(50, 580, 1000, 400);
  //HILLS closer
  fill(69, 168, 66);
  ellipse(440, 600, 1000, 400);
}
