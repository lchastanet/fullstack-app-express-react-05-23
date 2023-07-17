import express from "express"

import {
  browse,
  findOne,
  addOne,
  modifyOne,
  removeOne,
} from "../controllers/user.controller.js"

const router = express.Router()

router.get("/", browse)
router.get("/:id", findOne)
router.post("/", addOne)
router.put("/:id", modifyOne)
router.delete("/:id", removeOne)

export default router
