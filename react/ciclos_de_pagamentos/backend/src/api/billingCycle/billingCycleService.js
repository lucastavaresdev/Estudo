const BillingCycle = require('./billingCycle');


//Metodos utilizados 
BillingCycle.methods(['get', 'post', 'put', 'delete'])


//Como as regras so funciona para os inserts essa linha coloca para update as validações
BillingCycle.updateOptions({ new: true, runValidators: true })


module.exports = BillingCycle