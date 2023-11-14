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
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>bellsOfaba</span>
            <span className={styles.date}>11.10.2023</span>
        </div>
      </div>
    </div><div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque similique minima quo alias hic eaque, quos animi ducimus eligendi? Minima.
              </p>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, perspiciatis.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo, pariatur ea aspernatur et soluta beatae minus. Quos, dignissimos repellat!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo, pariatur ea aspernatur et soluta beatae minus. Quos, dignissimos repellat!
              </p>
            </div>
          </div>
          <Menu />
        </div>
      </div>
  );
};

export default SinglePage;