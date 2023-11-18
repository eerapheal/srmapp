import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";

import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      <Pagination />
    </div>
  );
};

export default CardList;
