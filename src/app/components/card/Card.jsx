import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.image && (
        <div className={styles.postImg}>
          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textcontainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.postTitle}>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.postDesc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={styles.postbtn}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
