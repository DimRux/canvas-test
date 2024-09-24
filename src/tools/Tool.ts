export default abstract class Tool {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public mouseDown: boolean;
  public x: number;
  public y: number;
  public saved: string | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('нет контекста у canvas')
    }

    this.ctx = ctx;
    this.mouseDown = false;
    this.x = 0;
    this.y = 0;
    this.saved = null;
    this.destroyEvents();
  }

  protected listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  set fillStyle(color: string) {
    this.ctx.fillStyle = color;
  }

  set strokeColor(color: string) {
    this.ctx.strokeStyle = color;
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  clearBg(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }

  abstract mouseUpHandler(e: MouseEvent): void;

  abstract mouseDownHandler(e: MouseEvent): void;

  abstract mouseMoveHandler(e: MouseEvent): void;
}



