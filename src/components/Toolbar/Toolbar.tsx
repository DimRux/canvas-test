import React from "react";
import styles from './Toolbar.module.css';
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import canvasState from "../../store/canvasState";
import { observer } from "mobx-react-lite";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";

export const Toolbar: React.FC = observer(() => {

  return (
    <div className={styles.toolbar}>
      <button
        type="button"
        className={`${styles.btn} ${styles.brush}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.setTool(new Brush(canvasState.canvas))
          }
        }} />
      <button
        type="button"
        className={`${styles.btn} ${styles.rect}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.setTool(new Rect(canvasState.canvas))
          }
        }}
      />
      <button
        type="button"
        className={`${styles.btn} ${styles.circle}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.setTool(new Circle(canvasState.canvas))
          }
        }}
      />
      <button
        type="button"
        className={`${styles.btn} ${styles.eraser}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.setTool(new Eraser(canvasState.canvas))
          }
        }}
      />
      <button
        type="button"
        className={`${styles.btn} ${styles.line}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.setTool(new Line(canvasState.canvas))
          }
        }}
      />
      <input
        type="color"
        className={styles.input}
        onChange={(e) => {
          toolState.setFillStyle(e.target.value);
          toolState.setStrokeColor(e.target.value);
        }}
      />
      <button
        type="button"
        className={`${styles.btn} ${styles.cross}`}
        onClick={() => {
          if (canvasState.canvas) {
            toolState.clearCanvas();
          }
        }}
      />
      <button type="button" className={`${styles.btn} ${styles.undo}`} />
      <button type="button" className={`${styles.btn} ${styles.redo}`} />
      <button type="button" className={`${styles.btn} ${styles.save}`} />
    </div>
  );
});
