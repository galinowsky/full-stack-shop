export const errorHandler = (err, req, res) => {
  const { message, stack = '', status = 500 } = err

  stack.split('\n')
  const computedStack =
    process.env.NODE_ENV === 'development' ? stack.split('\n') : undefined

  res.status(status).json({ message, computedStack })
}
