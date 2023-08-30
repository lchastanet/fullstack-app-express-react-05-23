import jwt from "jsonwebtoken"

const { TOKEN_SECRET } = process.env

const signOptions = { expiresIn: "1h" }

export const encodeJWT = (payload) => {
  return jwt.sign(payload, TOKEN_SECRET, signOptions)
}

export const decodeJWT = (token) => {
  return jwt.decode(token, TOKEN_SECRET)
}
