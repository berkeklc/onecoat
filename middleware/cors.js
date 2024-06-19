// middleware/cors.js
module.exports = function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://naturaonecoat.vercel.app')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Authorization,X-Requested-With'
  )
  res.header('Access-Control-Expose-Headers', 'Content-Range,X-Content-Range')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
}
