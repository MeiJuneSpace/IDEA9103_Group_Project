function setup() {
  createCanvas(windowWidth, windowHeight);

  // State parameter range to use opacity under HSB mode
  // The current project uses RGB as its default colour mode
  colorMode(RGB);
  angleMode(DEGREES);

}

function draw() {

  // This is background color
  background(255);
  //hi
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
