import UnauthorizedError from "../errors/UnauthorizedError.js"
import { findOneByEmail } from "../models/user.model.js"
import asyncWrapper from "../utils/asyncWrapper.js"

const checkUserDoesntExists = asyncWrapper(async (req, res, next) => {
  const [user] = await findOneByEmail(req.body.email)

  if (user.length) throw new UnauthorizedError()

  return next()
})

export default checkUserDoesntExists
