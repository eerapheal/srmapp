import Featured from "./components/featured/Featured";
// import PostCategories from "./postCategories/page";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";
import HealthPost from "./postCategories/Health/Health";
import SportPost from "./postCategories/Sport/Sport";
import EnterntementPost from "./postCategories/Enterntement/Enterntement";
import LifestylePost from "./postCategories/Lifestyle/Lifestyle";
import TreadingPost from "./postCategories/Treading/Treading";
import TechnologyPost from "./postCategories/Technology/Technology";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />

      <div className={styles.content}>
        {/* <div className={styles.items}> */}
        <div >
          <CardList page={page} />
        </div>
        <div className={styles.cardItems}>
          <SportPost page={page} />
          <TechnologyPost page={page} />
          <TreadingPost page={page} />
          <LifestylePost page={page} />
          <EnterntementPost page={page} />
          <HealthPost page={page} />
        </div>
        </div>
      {/* </div> */}
    </div>
  );
}
