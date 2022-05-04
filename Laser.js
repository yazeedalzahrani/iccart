

let song;
let fft;
let ss = 0;

let canvas;
let amplitude;
let ll;
let song2;

function setup() {
  canvas =createCanvas(600, 450);

    canvas.mouseClicked(musicController);

    colorMode(HSB);
    angleMode(DEGREES);
    song.play();
    fft = new p5.FFT(0.9, 128 * 2);

}


function draw() {

       
          var spectrum = fft.analyze();
          noStroke();
          translate(width / 2, height / 2);
          for (var i = 0; i < spectrum.length; i++) {
              var angle = map(i, 0, spectrum.length, 0, 360) * ss;
              var amp = spectrum[i];
              var r = map(amp, 10, 150, 5, windowWidth / 1.5);
              var x = r * cos(angle);
              var y = r * sin(angle);
              strokeWeight(1);
              stroke(angle / (amp / 8), 205, 205);
              line(0, 0, x, y);
              line(1, 0, x, y);
            }

            ss += 0.01;
         

        
            
    }








function musicController() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound("aa.mp3");
}

