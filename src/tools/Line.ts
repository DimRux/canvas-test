import Tool from "./Tool";

export default class Line extends Tool {

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.x = e.pageX - this.canvas.offsetLeft;
    this.y = e.pageY - this.canvas.offsetTop;
    this.ctx.moveTo(this.x, this.y);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      this.draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop)
    }
  } 

  draw(x: number, y: number) {
    if (!this.saved) {
      throw new Error('saved is Null!');
    }

    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }
}
