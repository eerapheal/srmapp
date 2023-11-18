"use client";

import styles from "./themeToggle.module.css";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  // console.log(theme)
  return (
    <div className={styles.container} onClick={toggle}>
      <Image
        className={styles.moonTheme}
        src="/moon.png"
        alt="moon"
        width={14}
        height={14}
      />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#1847b6" }
            : { left: 1, background: "white" }
        }
      ></div>
      <Image
        className={styles.sunTheme}
        src="/sun.png"
        alt="sun"
        width={14}
        height={14}
      />
    </div>
  );
};

export default ThemeToggle;
