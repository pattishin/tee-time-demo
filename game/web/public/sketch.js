//variable for JSON object with file names
let levels;
let y = 100;

function preload() {
  //load and save the songs folder as JSON
  levels = loadJSON("/levels"); 
}

function setup() {
  createCanvas(400, 400);
  console.log(levels)
  stroke(255); // Set line drawing color to white
  frameRate(30);
}

function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
