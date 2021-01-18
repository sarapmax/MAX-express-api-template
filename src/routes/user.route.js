import { Router } from 'express'
import controller from '../controllers/user.controller'

const router = Router()

/**
 * Load user when API with userId route parameter is hit
 */

router.param('userId', controller.load)

router.route('/').get(controller.list)
// .post(controller.create)

router.route('/:userId').get(controller.get)
//   .put(controller.replace)
//   .patch(controller.update)
//   .delete(controller.remove)

export default router
