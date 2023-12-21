import styles from "./BlogPage.module.css";
import CardList from "../../components/cardList/CardList";
// import HealthPost from "../postCategories/Health/Health";
// import SportPost from "../postCategories/Sport/Sport";
// import EnterntementPost from "../postCategories/Enterntement/Enterntement";
// import LifestylePost from "../postCategories/Lifestyle/Lifestyle";
// import TreadingPost from "../postCategories/Treading/Treading";
// import TechnologyPost from "../postCategories/Technology/Technology";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        {/* <SportPost page={page} />
        <TechnologyPost page={page} />
        <TreadingPost page={page} />
        <LifestylePost page={page} />
        <EnterntementPost page={page} />
        <HealthPost page={page} /> */}
      </div>
    </div>
  );
};

export default BlogPage;
