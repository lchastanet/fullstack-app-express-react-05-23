import { findOneByEmail } from "../models/user.model.js"

const checkUserDoesntExists = async (req, res, next) => {
  const [user] = await findOneByEmail(req.body.email)

  //console.log(user)

  if (user.length) {
    return res.status(400).json({ message: "User already exists" })
  }

  return next()
}

export default checkUserDoesntExists
