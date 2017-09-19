// content of index.js
const http = require('http')
const port = 3333
const path = require('path')
const fs = require('fs')

http
  .createServer((request, response) => {
    const data = JSON.parse(
      fs.readFileSync(path.join('./public', request.url), 'utf8')
    )

    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Request-Method', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // const features = data.features.slice(0, 1000)
    const features = data.features // .slice(0, 1000)
    response.end(JSON.stringify(Object.assign(data, { features })))
  })
  .listen(port, err => {
    if (err) return console.log('something bad happened', err)
    console.log(`server is listening on ${port}`)
  })
