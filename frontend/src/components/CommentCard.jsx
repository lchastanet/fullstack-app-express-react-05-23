import styles from "../styles/CommentCard.module.css"

function CommentCard({ comment }) {
  return (
    <div className={styles.container}>
      <p>{comment.content}</p>
    </div>
  )
}

export default CommentCard
