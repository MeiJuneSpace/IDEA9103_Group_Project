class PurpleLine {
  constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.drawX = this.x;
      this.drawY = this.y;
      this.drawW = this.w;
      this.drawH = this.h;
  }

  display() {
      fill(128, 132, 255);
      rect(this.drawX, this.drawY, this.drawW, this.drawH);
  }

  updateSize(insideCanvasWidth, insideCanvasHeight) {
      this.drawX = this.x * insideCanvasWidth + insideCanvas.x;
      this.drawY = this.y * insideCanvasHeight + insideCanvas.y;
      this.drawW = this.w * insideCanvasWidth;
      this.drawH = this.h * insideCanvasHeight;
  }
}