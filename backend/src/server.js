import express from 'express'
import { errorHandler } from './error.handler.js'
import { router } from './router.js'

const { PORT = 5300 } = process.env
const app = express()

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  console.log(req)
  res.json({ hello: 'world' })
})
app.all('*', (req, res) => {
  const { url, method } = req
  res
    .status(404)
    .json({ message: `Path ${url} for method ${method} not found :(` })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

app.use(errorHandler)

process.on('uncaughtException', (err) => {
  console.error('uncaught Exception')
  console.log(err)
})
