const express = require('express')

const server = express()

server.use(express.static('./public'))

server.listen(8081, () => {
  console.log('server @ http://localhost:8081')
})