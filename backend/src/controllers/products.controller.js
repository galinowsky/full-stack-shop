import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'

import { getProducts, getProduct } from '../db/database.api.js'

export const productController = new Router()

productController.get('/', authMiddleware, async (req, res) => {
  const { page = '1', count = '50' } = req.query
  const pageNum = Number(page)
  const countNum = Number(count)
  const take = countNum <= 0 ? 1 : countNum
  const skip = (pageNum - 1) * take
  const products = await getProducts(skip, take)
  res.status(201).json({ products })
})

productController.get('/:productId', authMiddleware, async (req, res) => {
  const { productId } = req.params
  const product = await getProduct(productId)

  res.status(201).json({ product })
})
