function setup() {
  createCanvas(windowWidth, windowHeight);

  // State parameter range to use opacity under HSB mode
  // The current project uses RGB as its default colour mode
  colorMode(RGB);
  angleMode(DEGREES);

}

function draw() {
  background(220);
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
