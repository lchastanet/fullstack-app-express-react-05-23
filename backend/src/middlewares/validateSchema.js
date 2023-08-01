import { validationResult } from "express-validator"

const validateSchema = (schema) => [
  schema,
  (req, res, next) => {
    const errors = validationResult(req)

    console.log("===================")

    console.log(JSON.stringify(errors))

    console.log("===================")

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }

    next()
  },
]

export default validateSchema
