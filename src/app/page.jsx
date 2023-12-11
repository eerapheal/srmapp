import Featured from "./components/Featured/Featured";
import Menu from "./components/Menu/Menu";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

  return (
  <div className={styles.container}>
     <Featured />
     
<div className={styles.content}>
  <CardList page={page}/>
  <Menu />
</div>
  </div>
  );
}
