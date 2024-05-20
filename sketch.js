// Define colours used in the current artwork
let limeGreen = color(130, 255, 213);
let roseRed = color(190, 34, 74);
let milkYellow = color(225, 226, 208);
let linePurple = color(128, 132, 255);
let shallowPurple = color(216, 222, 255);


function setup() {
  createCanvas(windowWidth, windowHeight);

  // State parameter range to use opacity under HSB mode
  // The current project uses RGB as its default colour mode
  colorMode(RGB);
  angleMode(DEGREES);

  //set insideCanvas elements
  insideCanvasX = windowWidth/10;
  insideCanvasY = windowHeight/5;
  insideCanvasWidth = 4 * windowWidth / 5;
  insideCanvasHeight = 3 * windowHeight / 5;

}



function draw() {
  // This is background color
  background(255);
  // Draw canvas for the drawing elements
  drawInsideCanvas();
  drawFrame();

  // This is the shadow of the whole canvas
  // This must be on the top of the canvas
  drawShadow();
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
