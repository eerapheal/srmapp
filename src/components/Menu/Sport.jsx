"use client";
import React, { useEffect, useState } from "react";
import styles from "../CardList/cardList.module.css";
import Link from "next/link";
import Card from "./card/Card";

const getData = async (page) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=sport`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SportPost = ({ page }) => {
  const [postsData, setPostsData] = useState({ posts: [], count: 0 });
  const [showOnePost, setShowOnePost] = useState(true);
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

  const { posts, count } = postsData;
  const displayPosts = showOnePost ? [posts[0]] : posts;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sport Posts</h1>
      <div className={styles.posts}>
        {displayPosts.map((item) => (
          item && <Card item={item} key={item._id} />
        ))}
      </div>
      <div style={{ margin: "10px"}}>
    <Link href={`/blog?cat=sport`} 
    style={{ backgroundColor: 'blue', 
     padding: '5px 8px',
     color: "#fff",  fontSize: "1rem",
     lineHeight: "1.25rem",
     fontWeight: "600"}}>
    View All</Link>
    </div>
    </div>
  );
};

export default SportPost;