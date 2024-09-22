import React from "react";
import styles from './Canvas.module.css';

export const Canvas: React.FC = () => {
  return (
  <div className={styles.canvasWrapper}>
    <canvas className={styles.canvas} width={600} height={400} />
  </div>
  );
};
