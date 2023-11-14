import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="./login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>bellsOfaba</span>
              <span className={styles.date}>11.13.2023</span>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vel veritatis atque similique ex, sequi deleniti saepe ab animi repudiandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
