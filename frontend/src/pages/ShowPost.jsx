import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from "../styles/ShowPost.module.css"

function ShowPost() {
  const [post, setPost] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  return (
    <>
      {post && (
        <div className={styles.container}>
          <h1>{post.title}</h1>
          <div className={styles["post-content"]}>
            <span>
              Le {new Date(post.creation_date).toLocaleDateString()} à{" "}
              {new Date(post.creation_date).toLocaleTimeString()}
            </span>
            <p>{post.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ShowPost
