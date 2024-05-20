function drawInsideCanvas() {
    //draw insidecanvas
    fill(shallowPurple);
    noStroke();
    rect(insideCanvasX, insideCanvasY, insideCanvasWidth, insideCanvasHeight);
    }

function drawFrame(){
    for (let i = 0; i < 30; i++) {
        noFill();
        stroke(73 + 3 * i, 38 + i, 1 + i);
        frameX = insideCanvasX - i/2;
        frameY = insideCanvasY - i/2;
        frameWidth = insideCanvasWidth + i;
        frameHeight = insideCanvasHeight + i;
        rect(frameX, frameY, frameWidth, frameHeight);
    }
}

function drawShadow() {
    //draw base dark shallow
    fill(0, 50);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
}