import { validationResult } from "express-validator"

const validateSchema = (schema) => [
  schema,
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }

    next()
  },
]

export default validateSchema
