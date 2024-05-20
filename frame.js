//draw insideCanvas
function insideCanvas(){
    insideCanvasX = windowWidth/10;
    insideCanvasY = windowHeight/5;
    insideCanvasWidth = 4 * windowWidth / 5;
    insideCanvasHeight = 3 * windowHeight / 5;
    fill(216, 222, 255);
    noStroke()
    rect(insideCanvasX, insideCanvasY, insideCanvasWidth, insideCanvasHeight);
}

function drawFrame(){
    //set base frame value
    insideFrameX = windowWidth/10;
    insideFrameY = windowHeight/5;
    insideFrameWidth = 4 * windowWidth / 5;
    insideFrameHeight = 3 * windowHeight / 5;
}