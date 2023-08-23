import asyncWrapper from "../utils/asyncWrapper.js"
import { findOneByEmail, createOne } from "../models/user.model.js"

export const signIn = async (req, res) => {
  const [user] = await findOneByEmail(req.body.email)

  if (user.length) {
    res.status(200).json(user[0])
  } else {
    res.sendStatus(404)
  }
}

export const signUp = asyncWrapper(async (req, res, next) => {
  const [result] = await createOne(req.body)

  delete req.body.password

  if (result.affectedRows) {
    res.status(201).json({ id: result.insertId, ...req.body })
  } else {
    res.sendStatus(500)
  }
})
