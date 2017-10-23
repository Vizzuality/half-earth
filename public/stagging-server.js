const connect = require('connect')
const path = require('path')
const serveStatic = require('serve-static')

connect()
  .use(serveStatic(path.join(__dirname, 'public')))
  .listen(process.env.PORT || 8080)
