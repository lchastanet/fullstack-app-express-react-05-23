import { hash } from "../helpers/hashingHelper.js"
import asyncWrapper from "../utils/asyncWrapper.js"

const hashPassword = asyncWrapper(async (req, res, next) => {
  const hashedPassword = await hash(req.body.password)

  req.body.password = hashedPassword

  next()
})

export default hashPassword
