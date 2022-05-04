let img;
let music;

function preload() {
  music = loadSound("aa.mp3");
}
function setup() {
  canvas = createCanvas(800, 800);
  canvas.mouseClicked(musicController);
  amplitude = new p5.Amplitude();

  img = loadImage("hug.png");
  background(2);
  image(img, 0, 0, 800, 800);
}

function draw() {
  image(img, 0, 0, 800, 800);

  fill(255, 216, 251);
  noStroke();
  heart(random(width), random(height), 40);
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);

  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function musicController() {
  if (music.isPlaying()) {
    music.stop();
  } else {
    music.play();
  }
}
