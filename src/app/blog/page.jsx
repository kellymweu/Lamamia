import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     cache: "no-store",
//   });
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
 
  return res.json();
}

const Blog = async () => {
  const data = await getData ();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            //src="https://images.pexels.com/photos/16846950/pexels-photo-16846950/free-photo-of-sea-beach-water-ocean.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            src={data.img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>item.desc</p>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default Blog;
