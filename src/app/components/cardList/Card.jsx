import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      {/* <div  className={styles.post}> */}
      <div className={styles.post}>
        <div className={styles.postImg}>
          <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
        </div>
        <div className={styles.textcontainer}>
          <div className={styles.details}>
            <span className={styles.date}>11.14.2023</span>{" "}
            <span className={styles.category}>Sport</span>
          </div>
          <Link href="/">
            {" "}
            <h1 className={styles.postTitle}>Yes Testing</h1>
          </Link>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            illum, culpa suscipit deserunt eius iusto dignissimos qui.
          </p>
          <button className={styles.postbtn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
