import {
  getAll,
  getOne,
  createOne,
  editOne,
  deleteOne,
} from "../models/user.model.js"

export const browse = async (req, res) => {
  try {
    const [result] = await getAll()

    res.json(result)
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

export const addOne = async (req, res) => {
  try {
    const user = req.body

    const [result] = await createOne(user)

    if (result.affectedRows) {
      res.status(201).json({ id: result.insertId, ...user })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
}

export const modifyOne = async (req, res) => {
  try {
    const user = req.body
    const { id } = req.params

    const [result] = await editOne({ id, ...user })

    if (result.affectedRows) {
      res.json({ id, ...user })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ msg: "Erreur" })
  }
}

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
