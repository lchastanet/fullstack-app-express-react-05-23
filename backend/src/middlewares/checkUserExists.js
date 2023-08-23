import UnauthorizedError from "../errors/UnauthorizedError.js"
import { getOne } from "../models/user.model.js"
import asyncWrapper from "../utils/asyncWrapper.js"

const checkUserExists = asyncWrapper(async (req, res, next) => {
  const [user] = await getOne(req.body.user_id)

  if (!user.length) throw new UnauthorizedError()

  return next()
})

export default checkUserExists
