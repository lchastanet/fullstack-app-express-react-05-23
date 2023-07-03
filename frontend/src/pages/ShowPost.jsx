import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

import styles from "../styles/ShowPost.module.css"

function ShowPost() {
  const [post, setPost] = useState(null)

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8000/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure ?")

    if (confirm) {
      fetch(`http://localhost:8000/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 204) {
          navigate("/")
        } else {
          alert("Bad request")
        }
      })
    }
  }

  return (
    <>
      {post ? (
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
                className={`${styles.button}  ${styles.danger}`}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No post found</p>
      )}
    </>
  )
}

export default ShowPost
