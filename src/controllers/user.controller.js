import { users } from '../models'
import { OK, CREATED, INTERNAL_SERVER_ERROR } from '../constants/http-status'
import { RECORD_CREATED, RECORD_UPDATED, RECORD_DELETE } from '../constants/response-message'

// Get all users
exports.list = async (req, res) => {
  try {
    const userList = await users.findAll()
    return res.status(OK).json({ users: userList })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}

// Get a user by id
exports.get = async (req, res) => {
  try {
    const { id } = req.params
    const user = await users.findOne({
      where: { id },
    })

    return res.status(OK).json({ user })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}

// Create a user
exports.create = async (req, res) => {
  try {
    const user = await users.create(req.body)

    return res.status(CREATED).json({ id: user.id, message: RECORD_CREATED })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params
    await users.update(req.body, { where: { id } })

    return res.status(OK).json({ message: RECORD_UPDATED })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params
    await users.destroy({ where: { id } })

    return res.status(OK).json({ message: RECORD_DELETE })
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
  }
}
