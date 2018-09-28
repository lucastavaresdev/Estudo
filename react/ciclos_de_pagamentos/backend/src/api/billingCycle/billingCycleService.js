const BillingCycle = require('./billingCycle');


//Metodos utilizados 
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//Como as regras so funciona para os inserts essa linha coloca para update as validações
BillingCycle.updateOptions({ new: true, runValidators: true })


BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = BillingCycle