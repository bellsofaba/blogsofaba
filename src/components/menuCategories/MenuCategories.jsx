import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.data}`}
        >
          Data
      </Link>
        <Link href="/blog"
          className={`${styles.categoryItem} ${styles.defi}`}>
          DeFi
        </Link>
        <Link href="/blog"
          className={`${styles.categoryItem} ${styles.ai}`}>
          Artificial Intelligence
        </Link>
        <Link href="/blog"
          className={`${styles.categoryItem} ${styles.web3}`}>
          Web3
        </Link>
        <Link href="/blog"
          className={`${styles.categoryItem} ${styles.cryptocurrency}`}>
          Cryptocurrency
        </Link>
        <Link href="/blog"
          className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>
  );
};

export default MenuCategories;
