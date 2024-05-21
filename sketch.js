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
  drawShallow();
  drawLightshallow();
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
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20, insideCanvas.width / 10 * 7, insideCanvas.height / 20);
    // 2
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 1.5, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 3
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 4, insideCanvas.width / 10 * 7, insideCanvas.height / 20);
    // 4
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20 * 11.5, insideCanvas.width / 5 * 2, insideCanvas.height / 20);
    // 5
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 12, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 6
    rect(insideCanvas.x + insideCanvas.width / 5 * 2, insideCanvas.y + insideCanvas.height / 20 * 13, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 7
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 20 * 14, insideCanvas.width / 5 * 2, insideCanvas.height / 20);
    // 8
    rect(insideCanvas.x + insideCanvas.width / 5 * 2, insideCanvas.y + insideCanvas.height / 4 * 3, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 9
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 15.5, insideCanvas.width / 5, insideCanvas.height / 20);
    // 10
    rect(insideCanvas.x + insideCanvas.width / 10 * 7, insideCanvas.y + insideCanvas.height / 20 * 17, insideCanvas.width / 10 * 3, insideCanvas.height / 20);
    // 11
    rect(insideCanvas.x, insideCanvas.y + insideCanvas.height / 10 * 9, insideCanvas.width / 10 * 7, insideCanvas.height / 20);

    // Vertical lines (from left to right)
    // 1
    rect(insideCanvas.x + insideCanvas.width / 25 * 2, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height);
    // 2
    rect(insideCanvas.x + insideCanvas.width / 25 * 4, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height);
    // 3
    rect(insideCanvas.x + insideCanvas.width / 5 * 2, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height);
    // 4
    rect(insideCanvas.x + insideCanvas.width / 2, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height / 4);
    // 5
    rect(insideCanvas.x + insideCanvas.width / 25 * 13, insideCanvas.y + insideCanvas.height / 4 * 3, insideCanvas.width / 50, insideCanvas.height / 4);
    // 6
    rect(insideCanvas.x + insideCanvas.width / 25 * 14, insideCanvas.y + insideCanvas.height / 20, insideCanvas.width / 50, insideCanvas.height / 12 * 7.5);
    // 7
    rect(insideCanvas.x + insideCanvas.width / 25 * 15.5, insideCanvas.y + insideCanvas.height / 20, insideCanvas.width / 50, insideCanvas.height / 12 * 7.5);
    // 8
    rect(insideCanvas.x + insideCanvas.width / 25 * 17, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height);
    // 9
    rect(insideCanvas.x + insideCanvas.width / 25 * 18, insideCanvas.y + insideCanvas.height / 20 * 17, insideCanvas.width / 50, insideCanvas.height / 20 * 3);
    // 10
    rect(insideCanvas.x + insideCanvas.width / 25 * 19, insideCanvas.y + insideCanvas.height / 10, insideCanvas.width / 50, insideCanvas.height / 10 * 8);
    // 11
    rect(insideCanvas.x + insideCanvas.width / 25 * 21, insideCanvas.y + insideCanvas.height / 10, insideCanvas.width / 50, insideCanvas.height / 10 * 9);
    // 12
    rect(insideCanvas.x + insideCanvas.width / 25 * 22.5, insideCanvas.y, insideCanvas.width / 50, insideCanvas.height);
}

//This is light part of shallow
function drawLightshallow(){
    fill(255, 10);
    noStroke;
    //Create base part of shallow triangles
    //Base elements of shallow
    let baseUpX1 = windowWidth / 5;
    let baseUpY1 = windowHeight / 7;
    let baseUpX2 = windowWidth / 5;
    let baseUpY2 = 3 * windowHeight / 7;
    let baseUpX3 = 9 * windowWidth / 25;
    let baseUpY3 = 2 * windowHeight / 7;
    let baseUpX4 = 9 * windowWidth / 25;
    let baseUpY4 = 4 * windowHeight / 7 - 2;
    //Empty between shallow shapes
    let shallowEmptyX = windowWidth / 40;
    let shallowEmptyY = windowHeight / 25;
    //calculate the distance between two shapes
    let shallowDistanceX = shallowEmptyX + 4 * windowWidth / 25;
    let shallowDistanceY = shallowEmptyY + 2 * windowHeight / 7;
    //claculate the distance between vertical column
    let shallowVerticalDistance = windowHeight / 7 + windowHeight / 35;
    //Use loop to draw shape
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 3; row++) {
        for (let i = 0; i < 30; i++) {
          let dx = col * shallowDistanceX;
          let dy = 1 * row * shallowDistanceY + col * shallowVerticalDistance;
          //calculate shallow shape value
          let x1 = baseUpX1 + i + dx;
          let y1 = baseUpY1 + 2 * i + dy;
          let x2 = baseUpX2 + i + dx;
          let y2 = baseUpY2 - i + dy;
          let x3 = baseUpX3 - i + dx;
          let y3 = baseUpY3 + i + dy;
          let x4 = baseUpX4 - i + dx;
          let y4 = baseUpY4 - 2 * i + dy;
          triangle(x1, y1, x2, y2, x3, y3);
          triangle(x4, y4, x2, y2, x3, y3);
        }
      }
  }
  
}

//This is shallow base
function drawShallow() {
    // Draw base dark shadow
    fill(0, 70);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
}
