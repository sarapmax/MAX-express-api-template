const { Router } = require('express')

const router = Router()

/**
 * Load user when API with userId route parameter is hit
 */
router.get('/', async (req, res) => {
  try {
    res.send('getting all users')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
// router.param('userId', controller.load)

// router.route('/').get(controller.list).post(controller.create)

// router
//   .route('/:userId')
//   .get(controller.get)
//   .put(controller.replace)
//   .patch(controller.update)
//   .delete(controller.remove)

export default router
