import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
  return (
   <div className={styles.categoryList}>
   <Link
     href="/blog?cat=style"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Style
   </Link>
       <div className={styles.categoryList}>
   <Link
     href="/"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Fashion
   </Link>
 </div>
     <div className={styles.categoryList}>
   <Link
     href="/"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Food
   </Link>
 </div>
     <div className={styles.categoryList}>
   <Link
     href="/"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Web3
   </Link>
 </div>
     <div className={styles.categoryList}>
   <Link
     href="/"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Culture
   </Link>
   <Link
     href="/"
     className={`${styles.categoryItem} ${styles.categoryName}`}
   >
     Coding
   </Link>
 </div>
 </div>
  )
}

export default MenuCategories