import db from "./db.js"

export const getAll = () => {
  return db.query("select * from post")
}

export const getOne = (id) => {
  return db.query(
    "select post.*, user.firstname from post join user on user.id = post.user_id where post.id = ?",
    [id]
  )
}

export const createOne = ({ title, content, user_id }) => {
  return db.query(
    "insert into post (title, content, user_id) values (?, ?, ?)",
    [title, content, user_id]
  )
}

export const editOne = ({ id, title, content }) => {
  return db.query("update post set title = ?, content = ? where id = ?", [
    title,
    content,
    id,
  ])
}

export const deleteOne = (id) => {
  return db.query("delete from post where id = ?", [id])
}
