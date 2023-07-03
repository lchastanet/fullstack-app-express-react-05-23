import db from "./db.js"

export const getAll = async () => {
  return db.query("select * from post")
}

export const getOne = async (id) => {
  return db.query("select * from post where id = ?", [id])
}

export const createOne = async ({ title, content }) => {
  return db.query("insert into post (title, content) values (?, ?)", [
    title,
    content,
  ])
}

export const editOne = async ({ id, title, content }) => {
  console.log(id)
  return db.query("update post SET title = ?, content = ? where id = ?", [
    title,
    content,
    id,
  ])
}

export const deleteOne = async (id) => {
  return db.query("delete from post where id= ?", [id])
}
