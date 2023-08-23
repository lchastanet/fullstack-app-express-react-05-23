import { validationResult } from "express-validator"
import ValidationError from "../errors/ValidationError.js"

const validateSchema = (schema) => [
  schema,
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
      throw new ValidationError({ errors: errors.mapped() })

    next()
  },
]

export default validateSchema
