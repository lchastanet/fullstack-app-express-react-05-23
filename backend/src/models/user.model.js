import db from "./db.js"

export const getAll = () => {
  return db.query("select id, lastname, firstname, email, roles from user")
}

export const findOneByEmail = (email) => {
  return db.query("select * from user where email = ?", [email])
}

export const getOne = (id) => {
  return db.query("select * from user where id = ?", [id])
}

export const createOne = ({ firstName, lastName, email, password }) => {
  return db.query(
    "insert into user (firstname, lastname, email, password) values (?, ?, ?, ?)",
    [firstName, lastName, email, password]
  )
}

export const editOne = ({ id, firstname, lastname }) => {
  return db.query("update user set firstname = ?, lastname = ? where id = ?", [
    firstname,
    lastname,
    id,
  ])
}

export const deleteOne = (id) => {
  return db.query("delete from user where id = ?", [id])
}
