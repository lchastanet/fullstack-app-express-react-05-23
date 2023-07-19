import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import styles from "../styles/ShowPost.module.css"
import CommentCard from "../components/CommentCard"

function ShowPost() {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${id}/comment`)
      .then((res) => res.json())
      .then(([postData, commentsData]) => {
        setPost(postData)
        setComments(commentsData)
      })
  }, [id])

  const handleDelete = () => {
    const confirmation = window.confirm("Are you sure ?")

    if (confirmation) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 204) {
          return navigate("/")
        }

        alert("Bad Request")
      })
    }
  }

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
            <div className={styles["show-post-buttons"]}>
              <Link className={styles.button} to={`/edit-post/${id}`}>
                Modifier
              </Link>
              <button
                onClick={handleDelete}
                className={`${styles.button} ${styles.danger}`}
              >
                Supprimer
              </button>
            </div>
          </div>
          <div className={styles["post-content"]}>
            <h2>Ajouter un commentaire :</h2>
          </div>
          <div className={styles["post-content"]}>
            <h2>Commentaires :</h2>
            {comments &&
              comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ShowPost
