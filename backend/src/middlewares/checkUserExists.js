import { getOne } from "../models/user.model.js"

const checkUserExists = async (req, res, next) => {
  const [user] = await getOne(req.body.user_id)

  if (!user.length) {
    return res.status(401).json({ message: "User doesn't exists" })
  }

  return next()
}

export default checkUserExists
