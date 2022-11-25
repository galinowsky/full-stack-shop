export const paginatorMiddleware = (req, res, next) => {
  const { page = '1', count = '50' } = req.query
  const pageNum = Number(page)
  const countNum = Number(count)

  const take = countNum <= 0 ? 1 : countNum
  const skip = (pageNum - 1) * take

  req.query = { ...req.query, take, skip }

  next()
}
