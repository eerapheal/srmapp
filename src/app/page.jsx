import FeaturedPost from "./featured/featuredPost";
import CardList from "./cardList/cardList";
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
      <FeaturedPost page={page} />
      <div className={styles.content}>
        <div>
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
    </div>
  );
}
