import React from 'react'
import styles from "./themeToggle.module.css";
import Image from "next/image";
const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.moonTheme} src="/moon.png" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image className={styles.sunTheme} src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
