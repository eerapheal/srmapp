import Image from "next/image";
import styles from "./Featured.module.css";

import React from "react";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sant Ralph Magazine</h1>
      <div className={styles.post}>
        <div className={styles.postImg}>
          <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.postTitle}>yes testing</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            illum, culpa suscipit deserunt eius iusto dignissimos qui, quasi
            officia temporibus quisquam veniam error alias? Velit, labore! Illo
            error molestiae dolor!
          </p>
          <button className={styles.postBTN}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
