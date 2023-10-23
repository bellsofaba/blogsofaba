import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css";

const MenuPosts = ({withImage}) => {
  return (
   <div className={styles.items}>
   <Link href="/" className={styles.item}>
   {withImage && (
   <div className={styles.imageContainer}>
       <Image src="/p1.jpeg" alt="" fill className={styles.image} />
     </div>
     )}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.travel}`}>
         Travel
       </span>
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
   {withImage && (
   <div className={styles.imageContainer}>
       <Image src="/p1.jpeg" alt="" fill className={styles.image} />
     </div>
     )}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.culture}`}>
         Culture
       </span>
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
   {withImage && (
   <div className={styles.imageContainer}>
       <Image src="/p1.jpeg" alt="" fill className={styles.image} />
     </div>
     )}
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
     {withImage && (
     <div className={styles.imageContainer}>
       <Image src="/p1.jpeg" alt="" fill className={styles.image} />
     </div>
     )}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.fashion}`}>
         Fashion
       </span>
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


  )
}

export default MenuPosts

// <div className={styles.items}>
// <Link href="/" className={styles.item}>
//   <div className={styles.textContainer}>
//     <span className={`${styles.category} ${styles.travel}`}>
//       Travel
//     </span>
//     <h3 className={styles.postTitle}>
//       Travel in style to and from your destination.
//     </h3>
//     <div className={styles.detail}>
//       <span className={styles.username}>bellsOfaba - </span>
//       <span className={styles.date}>10.21.2023</span>
//     </div>
//   </div>
// </Link>
// <Link href="/" className={styles.item}>
//   <div className={styles.textContainer}>
//     <span className={`${styles.category} ${styles.culture}`}>
//       Culture
//     </span>
//     <h3 className={styles.postTitle}>
//       Experience 5th Century Cultures Still Thriving Today.
//     </h3>
//     <div className={styles.detail}>
//       <span className={styles.username}>bellsOfaba - </span>
//       <span className={styles.date}>10.21.2023</span>
//     </div>
//   </div>
// </Link>
// <Link href="/" className={styles.item}>
//   <div className={styles.textContainer}>
//     <span className={`${styles.category} ${styles.food}`}>Food</span>
//     <h3 className={styles.postTitle}>
//       Unfathomable deliousness for your taste Buds.
//     </h3>
//     <div className={styles.detail}>
//       <span className={styles.username}>bellsOfaba - </span>
//       <span className={styles.date}>10.21.2023</span>
//     </div>
//   </div>
// </Link>
// <Link href="/" className={styles.item}>
//   <div className={styles.textContainer}>
//     <span className={`${styles.category} ${styles.fashion}`}>Web3</span>
//     <h3 className={styles.postTitle}>
//       Experience the trendiest dApps revered globally.
//     </h3>
//     <div className={styles.detail}>
//       <span className={styles.username}>bellsOfaba - </span>
//       <span className={styles.date}>10.21.2023</span>
//     </div>
//   </div>
// </Link>
// </div>