let angle = 0;
let canvas;
let amplitude;
let ll;
let song2;

function preload() {
  song = loadSound("aa.mp3");
}

function setup() {
  canvas = createCanvas(700, 700, WEBGL);
  canvas.mouseClicked(musicController);

  amplitude = new p5.Amplitude();
}

function draw() {
  background(200);

  ll = amplitude.getLevel();

  push();
  fill(200, 5, 52);
  translate(0, -80);
  rotateX(sin(angle));
  rotateY(sin(angle));
  rotateZ(sin(angle));
  torus(40 + ll * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 1, 6);
  pop();

  push();
  translate(-100, 30);
  rotateX(cos(angle));
  rotateY(cos(angle));
  rotateZ(cos(angle));
  torus(4 + ll * 250, 1, 7);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 7, 6);
  pop();

  push();
  translate(-100, 30);
  rotateX(cos(angle));
  rotateY(cos(angle));
  rotateZ(cos(angle));
  torus(40 + ll * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 1, 6);
  pop();

  push();
  translate(0, 80);
  rotateX(sin(angle));
  rotateY(sin(angle));
  rotateZ(sin(angle));
  torus(40 + ll * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 5, 6);
  pop();

  push();

  translate(100, 30);
  rotateX(cos(angle));
  rotateY(cos(angle));
  rotateZ(cos(angle));
  torus(40 + ll * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 5, 6);
  pop();

  angle += 0.05;
}

function musicController() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
