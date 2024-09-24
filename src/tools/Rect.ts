import Tool from "./Tool";

export default class Rect extends Tool {
  

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
    this.ctx.moveTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
    this.x = e.pageX - this.canvas.offsetLeft;
    this.y = e.pageY - this.canvas.offsetTop;
    this.saved = this.canvas.toDataURL()
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      let currentX = e.pageX - this.canvas.offsetLeft;
      let currentY = e.pageY - this.canvas.offsetTop;
      let width = currentX - this.x;
      let height = currentY - this.y;
      this.draw(this.x, this.y, width, height);
    }
  }

  draw(x: number, y: number, width: number, height: number) {
    if (this.saved) {
      const img = new Image();
      img.src = this.saved;
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fill();
        this.ctx.stroke();
      }
    }
  }
}