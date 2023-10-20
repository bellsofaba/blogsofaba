import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.04.2023</span>
          <span className={styles.category}>CULTURE</span>
          <span>11.04.2023</span>
        </div>
        <Link href="/">
          <h1>5 Must-Have Things to Bring Along With You on Your Next Trip</h1>
        </Link>
        <p>
          Discover the 5 travel essentials you can&rsquo;t leave home without.
          From versatile clothing to handy gadgets, ensure a stress-free and
          enjoyable journey on you next adventure.
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
