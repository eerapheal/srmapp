import styles from "./singlePage.module.css";
import Image from "next/image";
import Comment from "../../components/comment/comment";
import TechnologyPost from "../../postCategories/Technology/Technology";
import CardList from "../../postCategories/cardList/CardList";
import HealthPost from "../../postCategories/Health/Health";
import SportPost from "../../postCategories/Sport/Sport";
import EnterntementPost from "../../postCategories/Enterntement/Enterntement";
import LifestylePost from "../../postCategories/Lifestyle/Lifestyle";
import TreadingPost from "../../postCategories/Treading/Treading";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params, searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImgDiv}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.userimagelogo}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>
                {data?.user?.name || "Unknown User"}
              </span>{" "}
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.image && (
          <div className={styles.postImgDiv}>
            <Image src={data.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comment postSlug={slug} />
          </div>
          <div className={styles.postcontent}>
            <div className={styles.Cardcontent}>
              <CardList page={page} />
            </div>
            <div className={styles.categoriescontent}>
              <SportPost page={page} />
              <TechnologyPost page={page} />
              <TreadingPost page={page} />
              <LifestylePost page={page} />
              <EnterntementPost page={page} />
              <HealthPost page={page} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
