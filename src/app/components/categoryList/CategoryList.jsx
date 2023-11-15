import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categories}>
          <Link
            href="/blog?cat=liftStyle"
            className={`${styles.category} ${styles.liftStyle}`}
          >
            <Image
              src="/style.png"
              alt="cat"
              width={32}
              height={32}
              className={styles.image}
            />
            LiftStyle
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=sport"
            className={`${styles.category} ${styles.sport}`}
          >
            <Image
              src="/style.png"
              alt="cat"
              width={32}
              height={32}
              className={styles.image}
            />
            Sport
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=health"
            className={`${styles.category} ${styles.health}`}
          >
            <Image
              src="/style.png"
              alt="cat"
              width={32}
              height={32}
              className={styles.image}
            />
            Health
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=technology"
            className={`${styles.category} ${styles.technology}`}
          >
            <Image
              src="/style.png"
              alt="cat"
              width={32}
              height={32}
              className={styles.image}
            />
            Technology
          </Link>
          {/*  */}
          <Link
            href="/blog?cat=treandingsNews"
            className={`${styles.category} ${styles.treandingsNews}`}
          >
            <Image
              src="/style.png"
              alt="cat"
              width={32}
              height={32}
              className={styles.image}
            />
            TreandingsNews
          </Link>
      </div>
    </div>
  );
};

export default CategoryList;
