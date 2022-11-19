// import jwt from 'jsonwebtoken'
import { Router } from 'express'
import {
  authMiddleware,
  hardcodedToken,
} from '../middleware/auth.middleware.js'

import { getUsers, registerUser } from '../db/database.api.js'

export const userController = new Router()

userController.post('/login', (req, res) => {
  // const { body } = req
  // const { login, password } = req.body
  // const JWT_SECRET =
  //     "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
  // const token = jwt.sign({
  //     user_id: login,
  //     password,
  // },JWT_SECRET)
  // console.log(token)

  res.json({ message: 'you are logged in successfully', hardcodedToken })
})

userController.get('/', authMiddleware, async (req, res) => {
  const users = await getUsers()
  console.log(users)

  res.json({ users })
})

userController.post('/register', async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  const user = await registerUser(email, password)

  res.json({ user })
})
