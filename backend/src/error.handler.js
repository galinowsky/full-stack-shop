import { Prisma } from '@prisma/client'
import { ValidationError } from 'express-json-validator-middleware'
import { mapErrors } from './middleware/validator.middleware.js'

// eslint-disable-next-line
export const errorHandler = (err, req, res, next) => {
  let { message, stack = '', status = 500, errors } = err
  console.log('error handler middleware')
  stack.split('\n')
  const computedStack = stack.split('\n')
  if (err instanceof Prisma.NotFoundError) {
    console.log('prisma error')
    status = 404
  }
  if (err instanceof ValidationError) {
    status = 400
    console.log(err.validationErrors.body)
    errors = mapErrors(err.validationErrors.body)
  }

  res.status(status).json({ message, stack: computedStack, errors })
}
