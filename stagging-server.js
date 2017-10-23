const connect = require('connect')
const path = require('path')
const serveStatic = require('serve-static')
const port = process.env.PORT || 8080
connect()
  .use(serveStatic(path.join(__dirname, 'public')))
  .listen(port)

console.log(`serving from ${port}`)
