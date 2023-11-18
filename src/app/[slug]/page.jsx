import styles from "./singlePage.module.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu/Menu";
import Comment from "../components/comment/comment";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.textcontainer}>
          <h1 className={styles.text}> lore hout uyes </h1>
          <div className={styles.user}>
            <div className={styles.userImgDiv}>
              <Image
                src="/p1.jpeg"
                alt="lo"
                className={styles.userimagelogo}
                fill
              />
            </div>
            <div className={styles.usertextContainer}>
              {" "}
              <span className={styles.username}>EE Raphael</span>
              <span className={styles.postdate}>11.16.3023</span>
            </div>
          </div>
        </div>
        <div className={styles.postImgDiv}>
          <Image src="/p1.jpeg" alt="lo" className={styles.image} fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem
              eum delectus itaque, accusantium voluptatibus molestiae commodi
              illo ducimus labore maxime inventore quibusdam incidunt
              praesentium in aut ipsam enim dolores?
            </p>
            <h1>Lorem ipsum dolor sit </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem
              eum delectus itaque, accusantium voluptatibus molestiae commodi
              illo ducimus labore maxime inventore quibusdam incidunt
              praesentium in aut ipsam enim dolores?
            </p>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
