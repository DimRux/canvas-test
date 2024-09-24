import React from "react";
import styles from './SettingBar.module.css';
import toolState from "../../store/toolState";

export const SettingBar: React.FC = () => {
  return (
    <div className={styles.settingBar}>
      <label className={styles.label} htmlFor="line-width">Толщина линии</label>
      <input
        type="number"
        id='line-width'
        min={1}
        defaultValue={1}
        className={styles.input}
        onChange={(e) => toolState.setLineWidth(e.target.value)}
      />
    </div>
  );
};
