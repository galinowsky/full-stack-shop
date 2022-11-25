import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

const getProducts = async (skip, take) => {
  const products = await prisma.product.findMany({ skip, take })
  return products
}

const getProduct = async (productId) => {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      id: Number(productId),
    },
  })
  return product
}
const registerUser = async (email, password) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    })
    console.log(user)
    return user
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
      // const error = new Error('User already exists!')
      // console.log(error)
      throw new Error(err)
    }
  }
}

const updateUser = async (userId, body) => {
  console.log('wiisz mje?')
  const user = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: body,
  })
  return user
}

export { getUsers, getProducts, registerUser, getProduct, updateUser }
