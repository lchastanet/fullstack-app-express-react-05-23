import db from "./db.js"

export const getAll = () => {
  return db.query("select * from comment")
}

export const getOne = (id) => {
  return db.query("select * from comment where id = ?", [id])
}

export const createOne = ({ content }) => {
  return db.query("insert into comment ( content) values (?)", [content])
}

export const editOne = ({ id, content }) => {
  return db.query("update comment set content = ? where id = ?", [content, id])
}

export const deleteOne = (id) => {
  return db.query("delete from comment where id = ?", [id])
}

export const getAllByPost = (id) => {
  return db.query(
    "select c.id, c.content, u.firstname from comment as c join user as u on c.user_id = u.id where post_id = ?",
    [id]
  )
}
