"use client"
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image"
import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories", { catch: "no-store" });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        throw new Error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            <Image
              src={`/${item.image}`}
              alt={item.title}
              width={32}
              height={32}
              className={styles.image}
            />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
