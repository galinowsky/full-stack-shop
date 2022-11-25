export const hardcodedToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaGliaXgiLCJwYXNzd29yZCI6ImFkbWluMTIzIiwiaWF0IjoxNjY4NDk5Mzg3fQ.CngWwdLlokmh6MLr5tnLABDcXL2qWfWhsJaJ-pplcyg'

export const authMiddleware = (req, res, next) => {
  const { authorization = '' } = req.headers
  const [, token] = authorization.split(' ')
  if (token === hardcodedToken) {
    req.user = { id: 1, name: 'Mike' }
    next()
  } else {
    const error = new Error('Authorization error, user not logged in ')
    error.status = 403
    next(error)
  }
}
