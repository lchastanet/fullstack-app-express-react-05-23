import { Link } from "react-router-dom"

import styles from "../styles/PostCard.module.css"

function PostCard({ post }) {
  const { id, title, creation_date } = post

  return (
    <article className={styles["post-card"]}>
      <p>{new Date(creation_date).toLocaleString()}</p>
      <Link to={`/show-post/${id}`}>
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default PostCard
