/* eslint-disable prettier/prettier */
import { Router } from 'express'
import { validate } from 'express-validation'
import controller from '../controllers/user.controller'
import { createUser, updateUser } from '../validations/user.validation';

const router = Router()

router
  .route('/')
    .get(controller.list)
    .post(validate(createUser), controller.create)

router
  .route('/:id')
    .get(controller.get)
    .put(validate(updateUser), controller.update)
    .delete(controller.delete)

export default router
