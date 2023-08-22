import express from "express"

import checkUserDoesntExists from "../middlewares/checkUserDoesntExists.js"
import validateSchema from "../middlewares/validateSchema.js"
import { userSchema } from "../validators/user.validator.js"
import { signIn, signUp } from "../controllers/auth.controller.js"
import hashPassword from "../middlewares/hashPassword.js"

const router = express.Router()

router.post("/sign-in", signIn)
router.post(
  "/sign-up",
  validateSchema(userSchema),
  checkUserDoesntExists,
  hashPassword,
  signUp
)

export default router
