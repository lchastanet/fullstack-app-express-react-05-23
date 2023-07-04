import db from "./db.js"

export const getAll = () => {
  return db.query("select * from posts")
}

export const getOne = (id) => {
  return db.query("select * from posts where id = ?", [id])
}

export const createOne = ({ title, content }) => {
  return db.query("insert into posts (title, content) values (?, ?)", [
    title,
    content,
  ])
}

export const editOne = ({ id, title, content }) => {
  return db.query("update posts set title = ?, content = ? where id = ?", [
    title,
    content,
    id,
  ])
}

export const deleteOne = (id) => {
  return db.query("delete from posts where id = ?", [id])
}
