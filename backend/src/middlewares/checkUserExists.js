import UnauthorizedError from "../errors/UnauthorizedError.js"
import { findOneByEmail } from "../models/user.model.js"
import asyncWrapper from "../utils/asyncWrapper.js"

const checkUserExists = asyncWrapper(async (req, res, next) => {
  const [user] = await findOneByEmail(req.body.email)

  if (!user.length) throw new UnauthorizedError()

  req.user = user[0]

  return next()
})

export default checkUserExists
