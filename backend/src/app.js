import express from "express"
import cors from "cors"

import {
  getAll,
  getOne,
  editOne,
  deleteOne,
  createOne,
} from "./models/posts.model.js"

const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }))

router.get("/", async (req, res) => {
  try {
    const [posts] = await getAll()

    if (posts.length) {
      res.json(posts)
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    res.sendStatus(500)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const [posts] = await getOne(id)

    if (posts.length) {
      res.json(posts[0])
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    res.sendStatus(500)
  }
})

router.post("/", async (req, res) => {
  try {
    const post = req.body

    const [result] = await createOne(post)

    if (result.affectedRows) {
      res.status(201).json({ id: result.insertId, ...post })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const post = req.body
    const { id } = req.params

    const [result] = await editOne({ id, ...post })

    if (result.affectedRows) {
      res.json({ id, ...post })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await deleteOne(id)

    if (result.affectedRows) {
      res.sendStatus(204)
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

app.use("/post", router)

app.get("*", (req, res) => res.sendStatus(404))

export default app
