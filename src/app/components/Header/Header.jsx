import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import React from 'react'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className="styles.logo">
        <h1>SRM</h1>
      </div>
      <div className={styles.socical}>
       <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
       <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
       <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
       <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
       <Image src="/moon.png" alt="Twitter" width={24} height={24} />
      </div>
      <div className={styles.links}>
        <Link href="/" >Home</Link>
        <Link href="/" >About</Link>
        <Link href="/" >Contact</Link>
      </div>
    </div>
  )
}

export default Header
