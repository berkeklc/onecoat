module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
}
