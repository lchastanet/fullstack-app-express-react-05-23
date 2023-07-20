import { useEffect, useState } from "react"

import styles from "../styles/PostForm.module.css"
import { useNavigate, useParams } from "react-router-dom"

function PostForm({ modCreate }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    if (!modCreate) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title)
          setContent(data.content)
        })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.length > 3 && content.length > 10) {
      const data = { title, content }

      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/post${modCreate ? "" : "/" + id}`,
        {
          method: modCreate ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      ).then((res) => {
        if (res.status === 201) {
          return navigate("/")
        }

        if (res.status === 200) {
          return navigate(`/show-post/${id}`)
        }

        alert("Bad Request")
      })
    } else {
      alert("Fields cannont be null")
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="title">Titre :</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Contenu :</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        className={styles.button}
        type="submit"
        value={modCreate ? "Ajouter" : "Modifier"}
      />
    </form>
  )
}

export default PostForm
