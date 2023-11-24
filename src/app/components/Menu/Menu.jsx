import styles from "./Menu.module.css";
import React from "react";
import Popular from "./Popular";
import EditorPick from "./EditorPick";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.hot}>{"what's hot"}</h2>
      <Popular />
      
      <EditorPick />
    </div>
  );
};

export default Menu;
