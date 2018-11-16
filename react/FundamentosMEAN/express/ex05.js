const express = require('express')
const server = express()
const routers = require('./ex05_router')

server.use('/api', routers )
server.listen(3000, () => console.log('execuntando'))