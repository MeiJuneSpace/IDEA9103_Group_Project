/*
Please notice:
All the elements at the current stage are static,
please preset their position based on Di's drawing.
If your set up requires others work as a prerequist,
make sure you communicate with them and when they are able to finish the work,
and then you can move on.
*/

// Define a class to organise dimension variables
class InsideCanvas {
    constructor() {
        this.updateDimensions();
    }

    updateDimensions() {
        this.x = windowWidth / 10;
        this.y = windowHeight / 5;
        this.width = 4 * windowWidth / 5;
        this.height = 3 * windowHeight / 5;
    }
}