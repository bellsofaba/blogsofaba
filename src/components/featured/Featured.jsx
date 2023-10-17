import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Technology;<br/>Discover a Wealth of Creative Ideas;<br/>On <b>blogsOfaba.</b></h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unlocking Tomorrow&apos;s Tech Today: A Distinguished Tech Blog Hub.</h1>
          <p className={styles.postDesc}>Today&apos;s ever-evolving landscape of tech makes it essential to stay informed with the latest insights, innovations and trends that are shaping the future of technology. Stay Curious. Stay Educated.           
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;