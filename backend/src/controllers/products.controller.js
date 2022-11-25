import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { paginatorMiddleware } from '../middleware/paginator.middleware.js'
import { getProducts, getProduct } from '../db/database.api.js'

export const productController = new Router()

productController.get(
  '/',
  [authMiddleware, paginatorMiddleware],
  async (req, res) => {
    const { skip, take } = req.query
    const products = await getProducts(skip, take)
    res.status(201).json({ products })
  }
)

productController.get('/:productId', authMiddleware, async (req, res) => {
  const { productId } = req.params
  // const { id } = req.user 
  console.log(req.user)
  const product = await getProduct(productId)

  res.status(201).json({ product })
})
