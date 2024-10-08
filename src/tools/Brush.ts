import Tool from "./Tool";

export default class Brush extends Tool {

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx.beginPath()
    this.ctx.moveTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      this.draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop)
    }
  }

  draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}