// CardList.jsx
"use client";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = ({ page }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Removed 'page' parameter here
  }, [page]);

  return (
    <div className={styles.container}>
      <div>
        {data.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
