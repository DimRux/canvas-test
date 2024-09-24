import React, { useEffect, useRef } from "react";
import styles from './Canvas.module.css';
import { observer } from "mobx-react-lite";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";

export const Canvas: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current);
      toolState.setTool(new Brush(canvasRef.current));
    }
  }, []);

  return (
  <div className={styles.canvasWrapper}>
    <canvas ref={canvasRef} className={styles.canvas} width={600} height={400} />
  </div>
  );
});
