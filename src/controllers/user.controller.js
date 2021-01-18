import { users } from '../models'

/**
 * Load user and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await users.findOne({
      where: { id },
    })
    req.locals = { user }
    return next()
  } catch (error) {
    return next(error)
  }
}

// Get all users
exports.list = async (req, res) => {
  try {
    const userList = await users.findAll()
    return res.status(200).json({ users: userList })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get post by id
exports.get = async (req, res) => {
  try {
    const { user } = req.locals

    if (!user) {
      return res.status(404).json({ message: 'the user with the given id was not found' })
    }

    return res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
