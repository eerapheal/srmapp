import styles from "./BlogPage.module.css";
import CardList from "../components/cardList/CardList";
import Menu from "../components/Menu/Menu";

const BlogPage = () => {
  return (
    <div className={styles.contanier}>
      <h1 className={styles.title}>All Sport</h1>
      <div className={styles.SportItems}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
