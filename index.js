// index.js
const { bootstrap, start } = require('directus')
const cors = require('./middleware/cors')

async function init() {
  const directus = await bootstrap()
  const { app } = directus

  // Use the CORS middleware
  app.use(cors)

  await start(directus)
}

init().catch((error) => {
  console.error('Error starting Directus:', error)
  process.exit(1)
})
