import db from "./db.js"

export const getAll = () => {
  return db.query("select * from user")
}

export const getOne = (id) => {
  return db.query("select * from user where id = ?", [id])
}

export const createOne = ({ firstname, lastname }) => {
  return db.query("insert into user (firstname, lastname) values (?, ?)", [
    firstname,
    lastname,
  ])
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
