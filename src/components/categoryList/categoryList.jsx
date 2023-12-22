// "use client"
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const apiUrl = process.env.API_URL;
const getData = async () => {
  const res = await fetch(`${apiUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
          href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.image && (
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
