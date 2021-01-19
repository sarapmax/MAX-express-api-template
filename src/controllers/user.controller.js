import { users } from '../models'

// Get all users
exports.list = async (req, res) => {
  try {
    const userList = await users.findAll()
    return res.status(200).json({ users: userList })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a user by id
exports.get = async (req, res) => {
  try {
    const { id } = req.params
    const user = await users.findOne({
      where: { id },
    })

    return res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a user
exports.create = async (req, res) => {
  try {
    const user = await users.create(req.body)

    return res.status(201).json({ id: user.id, message: 'record has been saved successfilly.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params
    await users.update(req.body, { where: { id } })

    return res.status(200).json({ message: 'record has been updated successfilly.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params
    await users.destroy({ where: { id } })

    return res.status(200).json({ message: 'record has been deleted successfilly.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
