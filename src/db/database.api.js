import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

const getProducts = async () => {
  const products = await prisma.product.findMany()
  return products
}

const getProduct = async (productId) => {
    const product = await prisma.product.findFirstOrThrow({
        where: {
            id: Number(productId),
        }
    })
    return product
  }
const registerUser = async (email, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  })
  return user
}

export { getUsers, getProducts, registerUser,getProduct }
