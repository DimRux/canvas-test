export class CanvasCommand {
  undoList: string[] = [];
  redoList: string[] = [];

  pushToUndo(data: string) {
    this.undoList.push(data);
  }

  pushToRedo(data: string) {
    this.redoList.push(data);
  }

  undo(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Не удалось получить контекст 2D');

    if (this.undoList.length > 0) {
      const dataUrl = this.undoList.pop() as string;
      this.redoList.push(canvas.toDataURL());
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  redo(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Не удалось получить контекст 2D');

    if (this.redoList.length > 0) {
      const dataUrl = this.redoList.pop() as string;
      this.undoList.push(canvas.toDataURL());
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }

  async save(canvas: HTMLCanvasElement) {
    try {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const ctx = tempCanvas.getContext('2d');
      
      if (!ctx) throw new Error('Не удалось получить контекст canvas');
      
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      
      ctx.drawImage(canvas, 0, 0);
      
      const blob = await new Promise<Blob | null>((resolve) => {
        tempCanvas.toBlob(resolve, 'image/png');
      });
      
      if (!blob) throw new Error('Не удалось создать изображение');
      
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      const fileName = `drawing-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.png`;
      link.download = fileName;
      link.href = url;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
      
      return true;
    } catch (error) {
      console.error("Ошибка сохранения изображения:", error);
      return false;
    }
  }
}