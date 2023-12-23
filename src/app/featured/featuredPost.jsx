import Image from "next/image";
import styles from "./featured.module.css";

import React from "react";

const FeaturedPost = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headertitle}>Sant Ralph Magazine</h1>
      <div className={styles.card}>
        <div className={styles.postImg}>
          <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>yes testing</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            illum, culpa suscipit deserunt eius iusto dignissimos qui, quasi
          </p>
          <a className={styles.action} href="#">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
