import { findOneByEmail } from "../models/user.model.js"

export const signIn = async (req, res) => {
  const [user] = await findOneByEmail(req.body.email)

  if (user.length) {
    res.status(200).json({ name: user[0].firstname })
  } else {
    res.sendStatus(404)
  }
}
