import styles from "./BlogPage.module.css";
import CardList from "../cardList/cardList";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} All Blog Post</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
};

export default BlogPage;
