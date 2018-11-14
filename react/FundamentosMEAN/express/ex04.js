const express = require('express')
const server = express()


server.route('/clientes')
    .get((req,res) => res.send('Lista de Clientes'))
    .post((req,res) => res.send('Novo Cliente'))
    .put((req,res) => res.send('Atualizar de Clientes'))
    .delete((req,res) => res.send('deletar de Clientes'))

server.listen(3000, () => console.log('execuntando'))