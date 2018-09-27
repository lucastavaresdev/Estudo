const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())//pega todas as requisições json

server.listen(port, function () {
    console.log(`backend usando a porta ${port}`)
})


