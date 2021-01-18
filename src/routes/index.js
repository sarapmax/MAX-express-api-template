import express from 'express'
import userRoutes from './user.route'

const router = express.Router()

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'))

router.use('/users', userRoutes)

module.exports = router
