import UnauthorizedError from "../errors/UnauthorizedError.js"
import ValidationError from "../errors/ValidationError.js"

const errorHandler = (err, req, res, next) => {
  const errors = [UnauthorizedError, ValidationError]

  if (errors.some((errorDefined) => err instanceof errorDefined)) {
    res.status(err.status).json({ message: err.msg })
  } else {
    console.log(err)
    res.sendStatus(500)
  }
}

export default errorHandler
