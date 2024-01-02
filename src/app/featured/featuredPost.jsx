import styles from "./featured.module.css";

const FeaturedPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerDiv}>
        <h1 className={styles.headertitle}>Sant Ralph Magazine</h1>
        <h3 className={styles.subtitle}>
          Discover the latest trends in sports, health, technology, lifestyle,
          and entertainment. From exclusive athlete interviews to cutting-edge
          tech insights, we keep you informed and entertained with a diverse
          range of articles. Stay on the pulse of contemporary living with our
          dynamic content.
        </h3>
      </div>
    </div>
  );
};

export default FeaturedPost;
