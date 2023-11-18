import Link from "next/link";
import styles from "./comment.module.css";
import Image from "next/image";

const Comment = () => {
  const status = "authed";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comment</h1>
      {status === "authed" ? (
        <div className={styles.write}>
          <textarea placeholder="Drop a comment" className={styles.input} />
          <button>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.commentUser}>
        <div className={styles.Comment}>
          <div className={styles.user}>
            <Image
              src="/sun.png"
              alt="lo"
              width={50}
              height={50}
              className={styles.Userimage}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>EE Raphael</span>
              <span className={styles.postDate}>11.17.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat delectus reiciendis nam unde modi eligendi, repellendus aliquid, id doloremque esse, soluta sit aliquam dignissimos est asperiores quibusdam hic possimus?
          </p>
        </div>
      </div>
      <div className={styles.commentUser}>
        <div className={styles.Comment}>
          <div className={styles.user}>
            <Image
              src="/sun.png"
              alt="lo"
              width={50}
              height={50}
              className={styles.Userimage}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>EE Raphael</span>
              <span className={styles.postDate}>11.17.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat delectus reiciendis nam unde modi eligendi, repellendus aliquid, id doloremque esse, soluta sit aliquam dignissimos est asperiores quibusdam hic possimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
