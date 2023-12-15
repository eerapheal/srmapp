import styles from "../components/CardList/cardList.module.css"

const PostCategories = ({ searchParams },page) => {
  const pages = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
 <TechnologyPost page={pages} />
    </div>
  );
};

export default PostCategories;
