import styles from "./Pagination.module.css";

import React from "react";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.left}>Previus</button>
      <button className={styles.right}>Next</button>
    </div>
  );
};

export default Pagination;
