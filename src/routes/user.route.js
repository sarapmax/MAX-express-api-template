/* eslint-disable prettier/prettier */
import { Router } from 'express'
import controller from '../controllers/user.controller'

const router = Router()

router
  .route('/')
    .get(controller.list)
    .post(controller.create)

router
  .route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

export default router
