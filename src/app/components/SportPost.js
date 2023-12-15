"use client"
import React, { useEffect, useState } from "react";
import styles from "./CardList/cardList.module.css";
import Pagination from "./pagination/Pagination";
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

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sport Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default SportPost;
