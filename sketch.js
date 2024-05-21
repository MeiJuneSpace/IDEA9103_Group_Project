// Define colours
let limeGreen, roseRed, milkYellow, linePurple, shallowPurple;

// Create dimension for inside canvas
let insideCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // State parameter range to use opacity under HSB mode
  // The current project uses RGB as its default colour mode
  colorMode(RGB);
  angleMode(DEGREES);

  // Preset colours
  limeGreen = color(130, 255, 213);
  roseRed = color(190, 34, 74);
  milkYellow = color(225, 226, 208);
  linePurple = color(128, 132, 255);
  shallowPurple = color(216, 222, 255);

  // Initialise insideCanvas
  insideCanvas = new InsideCanvas();
}

function draw() {
  // This is background color
  background(255);
  // Draw canvas for the drawing elements
  drawInsideCanvas();
  drawFrame();

  // Draw purple lines in the canvas
  // This must be at the bottom of the canvas
  drawPurpleLines();

  // This is the shadow of the whole canvas
  // This must be on the top of the canvas
  drawShadow();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Update insideCanvas dimensions
  insideCanvas.updateDimensions();
}

// Draw inside canvas based on the insideCanvas class
function drawInsideCanvas() {
    // Draw inside canvas
    fill(shallowPurple);
    noStroke();
    rect(insideCanvas.x, insideCanvas.y, insideCanvas.width, insideCanvas.height);
}

function drawFrame() {
for (let i = 0; i < 30; i++) {
    noFill();
    stroke(73 + 3 * i, 38 + i, 1 + i);
    let frameX = insideCanvas.x - i / 2;
    let frameY = insideCanvas.y - i / 2;
    let frameWidth = insideCanvas.width + i;
    let frameHeight = insideCanvas.height + i;
    rect(frameX, frameY, frameWidth, frameHeight);
}
}

function drawPurpleLines(){
    fill(linePurple);
    noStroke();

    // Horizontal lines (from top to bottom)
    // 1
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20, insideCanvas.width / 3 * 2, insideCanvas.height / 20);
    // 2
    rect(insideCanvas.x + insideCanvas.width / 3 * 2, insideCanvas.y + insideCanvas.height / 20 * 1.5, insideCanvas.width / 3, insideCanvas.height / 20);
    // 3
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 4, insideCanvas.width / 3 * 2, insideCanvas.height / 20);
    // 4
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20 * 11.5, insideCanvas.width / 5 * 2, insideCanvas.height / 20);
    // 5
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 12, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 6
    rect(insideCanvas.x + insideCanvas.width / 5 * 2, insideCanvas.y + insideCanvas.height / 20 * 13, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 7
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20 * 14, insideCanvas.width / 5 * 2, insideCanvas.height / 20);
    // 8
    rect(insideCanvas.x + insideCanvas.width / 5 * 2, insideCanvas.y + insideCanvas.height / 20 * 15, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 9
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 15.5, insideCanvas.width / 5, insideCanvas.height / 20);
    // 10
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 17, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 11
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 10 * 9, insideCanvas.width / 3 * 2, insideCanvas.height / 20);

    // Vertical lines (from left to right)
    
}

function drawLightshallow(){
  
}

function drawShadow() {
    // Draw base dark shadow
    fill(0, 50);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
}

