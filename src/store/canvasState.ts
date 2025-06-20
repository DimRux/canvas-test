import { makeAutoObservable } from "mobx";
import { CanvasCommand } from "./commandState";

class CanvasState {
  canvas: HTMLCanvasElement | null = null
  command: CanvasCommand

  constructor() {
    makeAutoObservable(this);
    this.command = new CanvasCommand();
  }

  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
    
  }

  pushToUndo(data: string) {
    this.command.pushToUndo(data);
  }

  pushToRedo(data: string) {
    this.command.pushToRedo(data);
  }

  undo() {
    if (!this.canvas) {
      throw new Error('нет ссылки ref');
    }
    this.command.undo(this.canvas);
  }

  redo() {
    if (!this.canvas) {
      throw new Error('нет ссылки ref');
    }
    this.command.redo(this.canvas);
  }

  save() {
    if (!this.canvas) {
      throw new Error('нет ссылки ref');
    }
    const success = this.command.save(this.canvas);
    if (!success) {
      alert("Не удалось сохранить изображение");
    }
  }
}

export default new CanvasState();