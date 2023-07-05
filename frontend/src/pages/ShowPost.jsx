import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import styles from "../styles/ShowPost.module.css"

function ShowPost() {
  const [post, setPost] = useState(null)

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  const handleDelete = () => {
    const confirmation = window.confirm("Are you sure ?")

    if (confirmation) {
      fetch(`http://localhost:8080/post/${id}`, {
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
        </div>
      )}
    </>
  )
}

export default ShowPost
