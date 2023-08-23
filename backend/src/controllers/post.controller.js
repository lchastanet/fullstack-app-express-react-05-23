import { getAllByPost } from "../models/comment.model.js"
import {
  getAll,
  getOne,
  createOne,
  editOne,
  deleteOne,
} from "../models/post.model.js"
import asyncWrapper from "../utils/asyncWrapper.js"

export const browse = async (req, res) => {
  try {
    const [result] = await getAll()

    res.json(result)
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
}

export const findOneWithComments = async (req, res) => {
  try {
    const { id } = req.params

    const [[post]] = await getOne(id)
    const [comments] = await getAllByPost(id)

    if (post) {
      res.json([post, comments])
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
}

export const findOne = async (req, res) => {
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
}

export const addOne = asyncWrapper(async (req, res) => {
  const post = req.body

  const [result] = await createOne(post)

  if (result.affectedRows) {
    res.status(201).json({ id: result.insertId, ...post })
  } else {
    res.sendStatus(400)
  }
})

export const modifyOne = asyncWrapper(async (req, res) => {
  const post = req.body
  const { id } = req.params

  const [result] = await editOne({ id, ...post })

  if (result.affectedRows) {
    res.json({ id, ...post })
  } else {
    res.sendStatus(400)
  }
})

export const removeOne = async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await deleteOne(id)

    if (result.affectedRows) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
}
