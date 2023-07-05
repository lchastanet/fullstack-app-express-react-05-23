import styles from "../styles/EditPost.module.css"

import PostForm from "../components/PostForm"
import { useParams } from "react-router-dom"

function EditPost() {
  const { id } = useParams()

  return (
    <div className={styles.container}>
      <h1>Modifier le post N°{id}</h1>
      <PostForm />
    </div>
  )
}

export default EditPost
