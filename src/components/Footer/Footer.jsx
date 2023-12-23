import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <Image className={styles.logo} src="/favicon.ico.png" alt="SRM" width={50} height={50} />
        <h1 className={styles.pagename}>Sant Ralph Magazine</h1>
      </div>
      <p className={styles.details}>
      Explore the latest trends in sports, health, technology, lifestyle, and entertainment. Stay informed and entertained with our diverse range of articles on cutting-edge topics.",
      </p>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
        <Image src="/x.jpg" alt="Twitter" width={24} height={24} />
      </div>
      <div className={styles.footerlinks}>
        <div>
          <span className={styles.navtitle}>Title</span>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/about" className={styles.link}> 
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.containercategories}>
          <span className={styles.title}>Categories</span> {/* Corrected the closing tag */}
          <div className={styles.categories}>
            <Link
              href="/blog?cat=liftStyle"
              className={`${styles.category} ${styles.liftStyle}`}
          >
              LiftStyle
            </Link>
            <Link
            href="/blog?cat=sport"
            className={`${styles.category} ${styles.sport}`}
          >
           
            Sport
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=health"
            className={`${styles.category} ${styles.health}`}
          >
           
            Health
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=technology"
            className={`${styles.category} ${styles.technology}`}
          >
            
            Technology
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=treandingsNews"
            className={`${styles.category} ${styles.treandingsNews}`}
          >
            TreandingsNews
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
