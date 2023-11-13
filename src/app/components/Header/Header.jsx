import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import React from 'react'
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/themeToggle";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>SRM</h1>
      </div>
      <div className={styles.social}>
       <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
       <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
       <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
       <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
       <Image src="/x.jpg" alt="Twitter" width={24} height={24} />
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <AuthLink />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
