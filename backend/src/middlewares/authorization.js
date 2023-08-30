import UnauthorizedError from "../errors/UnauthorizedError.js"
import { decodeJWT } from "../helpers/jwtHelper.js"

const authorization = (req, res, next) => {
  const token = req.cookies?.auth_token

  console.log(req.cookies)

  if (!token) throw new UnauthorizedError()

  const data = decodeJWT(token)

  req.user = data

  next()
}

export default authorization
