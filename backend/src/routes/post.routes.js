import express from "express"

import validateSchema from "../middlewares/validateSchema.js"
import { postSchema } from "../validators/post.validator.js"
import {
  browse,
  findOne,
  addOne,
  modifyOne,
  removeOne,
  findOneWithComments,
} from "../controllers/post.controller.js"

const router = express.Router()

router.get("/", browse)
router.get("/:id/comment", findOneWithComments)
router.get("/:id", findOne)
router.post("/", validateSchema(postSchema), addOne)
router.put("/:id", modifyOne)
router.delete("/:id", removeOne)

export default router
