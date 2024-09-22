import React from "react";
import styles from './Toolbar.module.css';

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <button type="button" className={`${styles.btn} ${styles.brush}`} />
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
