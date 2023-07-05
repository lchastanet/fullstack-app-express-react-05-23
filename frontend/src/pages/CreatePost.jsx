import PostForm from "../components/PostForm"
import styles from "../styles/CreatePost.module.css"

function CreatePost() {
  return (
    <div className={styles.container}>
      <h1>Ajouter un post</h1>
      <PostForm modCreate />
    </div>
  )
}

export default CreatePost
