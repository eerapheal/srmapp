"use client"

import styles from "./Pagination.module.css";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({page, hasPrev, hasNext}) => {
  const rooter  = useRouter()    
  return (
    <div className={styles.container}>
      <button className={styles.left}
      disabled={!hasPrev}
      onClick={() => rooter.push('?page=${page -1} ')}
      >
        Previous
        </button>
      <button className={styles.right}
       disabled={!hasNext}
       onClick={() => rooter.push('?page=${page +1} ')}
      >
        Next
        </button>
    </div>
  ); 
};

export default Pagination;
