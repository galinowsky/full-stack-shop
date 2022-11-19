import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'

import { getProducts, getProduct } from '../db/database.api.js'

export const productController = new Router()

productController.get('/', authMiddleware, async (req, res) => {
    const products = await getProducts()
    console.log(products)
    res.status(201).json({ products })
})


productController.get('/:productId', authMiddleware, async (req, res) => {
    const { productId } = req.params
    const product = await getProduct(productId)

    res.status(201).json({ product })
})