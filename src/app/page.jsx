import Featured from "./components/Featured/featured";
import Menu from "./components/Menu/Menu";
import CardList from "./components/cardList/cardList";
import styles from "./homepage.module.css";

export default function Home() {
  return (
  <div className={styles.container}>
     <Featured />
<div className={styles.content}>
  <CardList />
  <Menu />
</div>
  </div>
  );
}
