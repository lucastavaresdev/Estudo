const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())//pega todas as requisições json
server.use(allowCors)
server.use(queryParser())


server.listen(port, function () {
    console.log(`backend usando a porta ${port}`)
})


module.exports = server

