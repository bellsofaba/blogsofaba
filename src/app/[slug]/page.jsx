import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css"
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="./p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>bellsOfaba</span>
            <span className={styles.date}>11.10.2023</span>
        </div>
      </div>
    </div><div className={styles.imageContainer}>
        <Image src="./p1.jpeg" alt="" fill className={styles.image} />
      </div>
      </div>
        <div className={styles.content}>
          <div className={styles.post}></div>
          <Menu />
        </div>
      </div>
  );
};

export default SinglePage;