import express from "express"

import { getAll, getOne, createOne } from "./model/posts.model.js"

const app = express()

app.use(express.json())

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const [result] = await getAll()

    res.json(result)
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await getOne(id)

    if (result.length) {
      res.json(result[0])
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
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
    res.status(500).json({ msg: "Erreur" })
  }
})

app.use("/post", router)

app.get("*", (req, res) => res.sendStatus(404))

export default app
