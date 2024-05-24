class purpleLines{
    constructor( x, y, w, h){ 
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.drawX;
      this.drawY;
      this.drawW;
      this.drawH;  
    }
  
    display(){
      fill(128, 132, 255);
      rect(this.drawX, this.drawY, this.drawW, this.drawH);
    }
  
  
    updateSize(insideCanvasWidth, insideCanvasHeight){
      this.drawX = this.x * insideCanvasWidth;
      this.drawY = this.y * insideCanvasHeight;
      this.drawW = this.w * insideCanvasWidth;
      this.drawH = this.h * insideCanvasHeight;
    }
  }