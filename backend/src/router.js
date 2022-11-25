import { Router } from 'express'
import { userController } from './controllers/user.controller.js'
import { productController } from './controllers/products.controller.js'
import { authMiddleware } from './middleware/auth.middleware.js'
export const router = new Router()

router.use('/users', userController)
router.use('/products', productController)
// router.use('/orders', authMiddleware, ordersController)
