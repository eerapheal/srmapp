import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";

import React from 'react'

const CardList = () => {
  return (
    <div className={styles.container}>
     <Pagination />
    </div>
  )
}

export default CardList
