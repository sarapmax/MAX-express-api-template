import { Joi } from 'express-validation'

export const createUser = {
  body: Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
}
export const updateUser = {
  body: Joi.object({
    email: Joi.string().email(),
    firstName: Joi.string(),
    lastName: Joi.string(),
  }),
  params: Joi.object({
    id: Joi.number().required(),
  }),
}
