import { hash } from "../helpers/hashingHelper.js"

const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await hash(req.body.password)

    req.body.password = hashedPassword

    next()
  } catch (e) {
    console.log(e)

    res.sendStatus(500)
  }
}

export default hashPassword
