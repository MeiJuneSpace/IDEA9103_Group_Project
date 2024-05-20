function setup() {
  createCanvas(windowWidth, windowHeight);

  // State parameter range to use opacity under HSB mode
  // The current project uses RGB as its default colour mode
  colorMode(RGB);
  angleMode(DEGREES);

  //set insideCamvas elements
  insideCanvasX = windowWidth/10;
  insideCanvasY = windowHeight/5;
  insideCanvasWidth = 4 * windowWidth / 5;
  insideCanvasHeight = 3 * windowHeight / 5;

}



function draw() {
  // This is background color
  background(255);
  drawInsideCanvas();
  drawFrame();

  //This is shallow of the whole canvas. It must be on the top of the canvas
  drawShallow();
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
