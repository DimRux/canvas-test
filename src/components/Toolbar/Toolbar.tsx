import React from "react";
import styles from './Toolbar.module.css';
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import canvasState from "../../store/canvasState";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <button type="button" className={`${styles.btn} ${styles.brush}`} onClick={() => {
        if (canvasState.canvas) {
          toolState.setTool(new Brush(canvasState.canvas))}}} />
      <button type="button" className={`${styles.btn} ${styles.rect}`} />
      <button type="button" className={`${styles.btn} ${styles.circle}`} />
      <button type="button" className={`${styles.btn} ${styles.eraser}`} />
      <button type="button" className={`${styles.btn} ${styles.line}`} />
      <input type="color" className={styles.input} />
      <button type="button" className={`${styles.btn} ${styles.undo}`} />
      <button type="button" className={`${styles.btn} ${styles.redo}`} />
      <button type="button" className={`${styles.btn} ${styles.save}`} />
    </div>
  );
};
