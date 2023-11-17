import Featured from "./components/Featured/featured";
import Menu from "./components/Menu/Menu";
import CardList from "./components/cardList/cardList";
import CategoryList from "./components/categoryList/categoryList";
import styles from "./homepage.module.css"

export default function Home() {
  return (
  <div className={styles.container}>
     <Featured />
<CategoryList />
<div className={styles.content}>
  <CardList />
  <Menu />
</div>
  </div>
  );
}
