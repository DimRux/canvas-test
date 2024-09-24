import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";

class ToolState {
  tool: Tool | null = null
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: Tool) {
    this.tool = tool;
  }

  setFillStyle(color: string) {
    if (!this.tool) {
      throw new Error('инструмент не выбран')
    }

    this.tool.fillStyle = color;
  }

  setStrokeColor(color: string) {
    if (!this.tool) {
      throw new Error('инструмент не выбран')
    }
    this.tool.strokeColor = color;
  }

  setLineWidth(width: string) {
    if (!this.tool) {
      throw new Error('инструмент не выбран')
    }
    this.tool.lineWidth = Number(width);
  }

  clearCanvas() {
    if (!this.tool) {
      throw new Error('инструмент не выбран')
    }
    this.tool.clearBg();
  }
  
}

export default new ToolState();