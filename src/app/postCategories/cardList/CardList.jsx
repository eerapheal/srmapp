import React from "react";
import styles from "./cardList.module.css";
import Card from "../../components/card/Card";
import Link from "next/link";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://127.0.0.1:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <Link
          href={`/blog`}
          style={{
            backgroundColor: "blue",
            padding: "5px 8px",
            color: "#fff",
            fontSize: "1rem",
            lineHeight: "1.25rem",
            fontWeight: "600",
          }}
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default CardList;
