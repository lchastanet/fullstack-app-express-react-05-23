import { findOneByEmail } from "../models/user.model.js"

export const signIn = async (req, res) => {
  const [user] = await findOneByEmail(req.body.email)

  if (user.length) {
    res.status(200).json(user[0])
  } else {
    res.sendStatus(404)
  }
}
