"use client";
import React, { useEffect, useState } from "react";
import styles from "../postCategories.module.css";
import Link from "next/link";
import Card from "../card/Card";

const Apiurl = process.env.API_URL;
const getData = async (page) => {
  const res = await fetch(`${Apiurl}/api/posts?page=${page}&cat?=features`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const FeaturesPost = ({ page }) => {
  const [postsData, setPostsData] = useState({ posts: [], count: 0 });
  const [showOnePost] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(page);
        setPostsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const { posts } = postsData;
  const displayPosts = showOnePost ? [posts[0]] : posts;

  return (
    <div className={styles.container}>
      <div className={styles.headerDiv}>
        <h1 className={styles.headertitle}>Sant Ralph Magazine</h1>
        <h3 className={styles.subtitle}>
        Discover the latest trends in sports, health, technology, lifestyle, and entertainment. From exclusive 
        athlete interviews to cutting-edge tech insights, we keep you informed and entertained with a
        diverse range of articles. Stay on the pulse of contemporary living with our dynamic content.
        </h3>
      </div>
      <h1
        style={{
          color: "blue",
          fontSize: "1.1rem",
          margin: "25px",
          lineHeight: "1.25rem",
          fontWeight: "700",
        }}
      >
        Health Posts
      </h1>
      <div className={styles.posts}>
        {displayPosts.map(
          (item) => item && <Card item={item} key={item._id} />
        )}
      </div>
      <div style={{ margin: "10px" }}>
        <Link
          href={`/blog?cat=health`}
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

export default FeaturesPost;
