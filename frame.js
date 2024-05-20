

function drawFrame(){
    //set base frame value
    for(let i = 0; i < 30; i++){
        noFill();
        stroke(73 + 3 * i, 38 + i, 1 + i);
        frameX = insideCanvasX - i/2;
        frameY = insideCanvasY - i/2;
        frameWidth = insideCanvasWidth + i;
        frameHeight = insideCanvasHeight + i;
        rect(frameX, frameY, frameWidth, frameHeight);
    }
}