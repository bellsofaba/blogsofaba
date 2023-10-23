import React from 'react'
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>
              Travel in style to and from your destination.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>
              Experience 5th Century Cultures Still Thriving Today.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Unfathomable deliousness for your taste Buds.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Web3</span>
            <h3 className={styles.postTitle}>
              Experience the trendiest dApps revered globally.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
      </div>

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>{"Editor's Pick"}</h1>
      <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.categoryName}`}
        >
          Style
        </Link>
      </div>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>
              Travel in style to and from your destination.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>
              Experience 5th Centuty Cultures Still Triving Today.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Unfathomable Deliousness for your Taste Buds.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>
              Experience the Trendiest Apparels Beloved Globally.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>bellsOfaba - </span>
              <span className={styles.date}>10.21.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;