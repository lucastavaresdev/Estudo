const express = require('express')
const router = express.Router()

router.use((req, res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Data.now} - ${init}`);
    
})

router.get('/produtos/:id', (req,res) => {
    res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id', (req,res) => {
    res.json({id: req.params.id, name: 'Joao'})
})

module.exports = router