import React from "react";
import styles from "./App.module.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { SettingBar } from "./components/SettingBar/SettingBar";
import { Canvas } from "./components/Canvas/Canvas";

export const App: React.FC = () => {
  return (
  <div className={styles.container}>
    <Toolbar />
    <SettingBar />
    <Canvas />
  </div>
  );
}

