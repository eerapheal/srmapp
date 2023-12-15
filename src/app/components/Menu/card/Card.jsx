import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
  <div className={styles.card}>
  <Link href={`/posts/${item.slug}`} alt="items" className={styles.item}>
  {item.image && (
        <div  className={styles.imgContainer}>

          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} {" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 139) }}/>
      </div>
      </Link>
  </div>
    </div>
  );
};

export default Card;
