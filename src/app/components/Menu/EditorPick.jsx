import styles from "./EditorPick.module.css";

import React from "react";
import Image from "next/image";
import Link from "next/link";



const EditorPick = ({searchParams}) => {
  // const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" alt="items" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.sport}`}>Sport</span>
            <div>
              <h3>sport title</h3>
              <span className={styles.date}>11.14.2023</span>{" "}
              <span className={styles.username}>E.E Raphael</span>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.items}>
        <Link href="/" alt="items" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.technology}`}>
              technology
            </span>
            <div>
              <h3>technology title</h3>
              <span className={styles.date}>11.14.2023</span>{" "}
              <span className={styles.username}>E.E Raphael</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" alt="items" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.health}`}>
              health
            </span>
            <div>
              <h3>health title</h3>
              <span className={styles.date}>11.14.2023</span>{" "}
              <span className={styles.username}>E.E Raphael</span>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.items}>
        <Link href="/" alt="items" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.treadings}`}>
              treadings
            </span>
            <div>
              <h3>treadings title</h3>
              <span className={styles.date}>11.14.2023</span>{" "}
              <span className={styles.username}>E.E Raphael</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" alt="items" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.lifeStyle}`}>
              lifeStyle
            </span>
            <div>
              <h3>lifeStyle title</h3>
              <span className={styles.date}>11.14.2023</span>{" "}
              <span className={styles.username}>E.E Raphael</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EditorPick;
