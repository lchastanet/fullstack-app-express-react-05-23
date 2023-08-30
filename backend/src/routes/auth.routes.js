import express from "express"

import checkUserDoesntExists from "../middlewares/checkUserDoesntExists.js"
import checkUserExists from "../middlewares/checkUserExists.js"
import validateSchema from "../middlewares/validateSchema.js"
import { userSchema } from "../validators/user.validator.js"
import { signIn, signUp, logout } from "../controllers/auth.controller.js"
import hashPassword from "../middlewares/hashPassword.js"
import { loginSchema } from "../validators/login.validator.js"

const router = express.Router()

router.post("/sign-in", validateSchema(loginSchema), checkUserExists, signIn)
router.post(
  "/sign-up",
  validateSchema(userSchema),
  checkUserDoesntExists,
  hashPassword,
  signUp
)
router.get("/logout", logout)

export default router
