import asyncWrapper from "../utils/asyncWrapper.js"
import { createOne } from "../models/user.model.js"
import { verify } from "../helpers/hashingHelper.js"
import { encodeJWT } from "../helpers/jwtHelper.js"
import UnauthorizedError from "../errors/UnauthorizedError.js"
import { generateToken } from "../helpers/csrfHelper.js"

export const signIn = asyncWrapper(async (req, res) => {
  const passwordVerif = await verify(req.user.password, req.body.password)

  if (!passwordVerif) throw new UnauthorizedError()

  delete req.user.password

  const token = encodeJWT(req.user)

  res.cookie("auth_token", token, { httpOnly: true, secure: false })

  res.status(200).json(req.user)
})

export const signUp = asyncWrapper(async (req, res, next) => {
  const [result] = await createOne(req.body)

  delete req.body.password

  if (result.affectedRows) {
    res.status(201).json({ id: result.insertId, ...req.body })
  } else {
    res.sendStatus(500)
  }
})

export const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200)
}

export const getCsrfToken = (req, res) => {
  const csrfToken = generateToken(req, res)

  res.json({ csrfToken })
}
