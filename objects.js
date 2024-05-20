/*
Please notice:
All the elements at the current stage are static,
please preset their position based on Di's drawing.
If your set up requires others work as a prerequist,
make sure you communicate with them and when they are able to finish the work,
and then you can move on.
*/

// This is for background lines
class PurpleLines {

}

// This is for basic rectangles
class Rectangle {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    display() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
}

// This is for interactive elements inside the big rectangles
class CircleInRect {

}