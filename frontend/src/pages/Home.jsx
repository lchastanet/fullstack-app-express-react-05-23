import { useEffect, useState } from "react"

import PostCard from "../components/PostCard"

import styles from "../styles/Home.module.css"

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/post")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className={styles["home-container"]}>
      <h1>Liste des posts</h1>
      <div className={styles["article-list"]}>
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home
