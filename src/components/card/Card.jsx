import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.04.2023 - </span>
          <span className={styles.category}>CODING</span>
        </div>
        <Link href="/">
          <h1>5 Must-Have VS Code Extensions to help you 10x your next app</h1>
        </Link>
        <p className={styles.desc}>
          Discover the 5 VS Code essentials you can&rsquo;t ignore in order to get your next app build up and running smoothly. 
          From live servers to enable you preview your building process on the DOM to prettier and help you format your code and have your files indented the right way.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
