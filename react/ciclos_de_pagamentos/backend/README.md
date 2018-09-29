Criando API para ciclos de pagamento
==============

### Montando o Ambiente

Criando a pasta do projeto
Criando a pasta backend



- Dependencias

    npm init -y

```
        npm i --save express@4.14.0
        npm i --save mongoose@4.7.0
        npm i --save body-parser@1.15.2
        npm i --save lodash@4.17.4
        npm i --save mongoose-paginate@5.0.3
        npm i --save express-query-int@1.0.1
        npm i --save node-restful@0.2.5
        npm i --save pm2@2.1.5

        ----

        npm i --save-dev nodemon@1.11.0

```



 - Package.json

 Configurar package.json as linhas em destaque

```
        {
       ** "name": "ciclos-de-pagamento-backend-API",**
        "version": "1.0.0",
        "description": "",
       ** "main": "src/loader.js",**
       ** "scripts": {
            "dev": "nodemon",
            "production": "pm2 start src/loader.js --name ciclos-de-pagamento-backend-API"
        },**
        "keywords": [],
        "author": "Lucas Tavares <lucastavaresdev@gmail.com>",
        "license": "MIT",
        "dependencies": {
            "body-parser": "^1.15.2",
            "express": "^4.14.0",
            "express-query-int": "^1.0.1",
            "mongoose": "^4.7.0",
            "mongoose-paginate": "^5.0.3",
            "node-restful": "^0.2.5",
            "pm2": "^2.1.5"
        },
        "devDependencies": {
            "nodemon": "^1.11.0"
        }
   }
```

- Configurando o servidor

 1) Criar o caminho src/loader.js
 2) dentro de src criar config/server.js



 **loader.js**

  ```
  require('./config/server')
  ```
  
 **config/server.js**



    ```
                    const port = 3004

                    const bodyParser = require('body-parser')
                    const express = require('express')
                    const server = express()

                    server.use(bodyParser.urlencoded({ extended: true }))
                    server.use(bodyParser.json())//pega todas as requisições json

                    server.listen(port, function () {
                        console.log(`backend usando a porta ${port}`)
                    })

                // Caso de esse erro Error: listen EADDRINUSE :::3003 é so alterar a porta  
    ```

- Configurando o Banco de dados

    criar o arquivo config/database.js

    No  **loader.js** incluir o caminho do arquivo

    ```
    require('./require('./config/database')
    ```

    Em **config/database**  

    ```
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise
    module.exports = mongoose.connect('mongodb://localhost/ciclos')

    // o banco deve estar startado

    ```

- Mapeando Objeto Documento

    - Criar a pasta api
    - Criar a pasta billingCycle
    - Criar a arquivo billingCycle.js


 ** billingCycle.js **

```
                const restful = require('node-restiful')
                const mongoose = restful.mongoose

                const creditSchema = new mongoose.Schema({
                    name: { type: String, required: true },
                    value: { type: Number, min: 0, required: true },
                })

                const debSchema = new mongoose.Schema({
                    name: { type: String, required: true },
                    value: { type: Number, min: 0, required: true },
                    status: {
                        type: String, required: false, uppercase: true,
                        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
                    }
                })

                const billingCycleSchema = new mongoose.Schema({
                    name: { type: String, requered: true },
                    month: { type: Number, min: 1, max: 12, requered: true },
                    year: { type: Number, min: 1970, max: 2100, required: true },
                    credits: [creditSchema],
                    debts: [debSchema]
                })

                module.exports = restful.model('BillingCycle', billingCycleSchema)
```

- Criação da api rest

    criar um arquivo na pasta billingCycle/billingCycleService

    **billingCycleService.js**

```
    const BillingCycle = require('./billingCycle');

    //Metodos utilizados 
    BillingCycle.methods(['get', 'post', 'put', 'delete'])

    //Como as regras so funciona para os inserts essa linha coloca para update as validações
    BillingCycle.updateOptions({ new: true, runValidators: true })

    module.exports = BillingCycle
```

- Mapeando as Rotas

    -criando o arquivo config/routes

    **routes.js**
        
```
        const express = require('express')

        module.exports = function (server) {

            //Definir a URL base
            const router = express.Router()
            server.use('/api', router)

            //Rotas do ciclo de pagamento
            const BillingCycle = require('../api/billingCycle/billingCycleService')
            BillingCycle.register(router, './billingCycle')
        }
```


Apos definir as rotas
no arquivo server.js exportar o server


```
    const port = 3004

    const bodyParser = require('body-parser')
    const express = require('express')
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())//pega todas as requisições json

    server.listen(port, function () {
        console.log(`backend usando a porta ${port}`)
    })

    //exportando o server
    module.exports = server
```


Após isso para para os routes o servidor no loader.js
            
```
    const server = require('./config/server')
    require('./config/database')
    require('./config/routes')(server)
```                


- Testando a api

    -Abrir o postman

Validação Funcionando

```
nome: Janeiro/17
month: 1
year: 2017
credits[0][name]:Salario Empresa
credits[0][value]: 6500
credits[1][name]:Salario Professor
credits[1][value]: 2700
```


Validação nao funcionando

```
nome: Janeiro/17
month: 1
year: 2017
credits[0][name]:Salario Empresa
credits[0][value]: 6500
credits[1][name]:Salario Professor
credits[1][value]: 2700
debts[0][name]:Telefone
```

Colocando mensagem de erro 

No **database.js** colocar a msg

```
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise
    module.exports = mongoose.connect('mongodb://localhost/ciclos')


    mongoose.Error.messages.general.required = " O atributo '{PATH}' é obrigatorio."  

```


Outra forma de colocar o aviso é no billingCycles.js na regra coloca a mensagem

```
value: { type: Number, min: 0, required: [true, 'informe o valor de Debito'] },
```


Testando no postmen (abrir postman colocar a url da api, clicar em post -> body -> x-www-form -> Bulkedit-> colar -> send)

```
nome: Janeiro/17
month: 1
year: 2017
credits[0][name]:Salario Empresa
credits[0][value]: 6500
credits[1][name]:Salario Professor
credits[1][value]: 2700
debts[0][name]: Telefone
debts[0][value]: 89.59
debts[0][status]:PAGO
debts[1][name]: Condominio
debts[1][value]: 720
debts[1][status]:AGENDADO
```

Usando o put 

pegar o id
alterar a url http://localhost:3004/api/billingCycles/:id
colocar post
Clicar em paramtros 
Colcoar o id desejado

```

mongoose.Error.messages.general.required = " O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE} informado é menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de {MAX}"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."

```

Neste momento api com as quatro operações ja deve estar funcionando

============================================

## ▶️ Obtendo a quantidade de Registros

billingCycleService.js

```
//adiciona a rota e conta os resgistros no banco de dados
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

```


```

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        }, {
            $project: { _id: 0, credit: 1, debt: 1 }
        }, (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result[0] || { credit: 0, debt: 0 })
            }
        })
})
```

No agrregate alterar versão do mongoose para     "mongoose": "^4.13.7", e colocar o codigo abaixo nos database.js

```
module.exports = mongoose.connect('mongodb://localhost/ciclos', { useMongoClient: true })
```


-Tratando os errors de post e put invalidos

Criar common/errorHandle.js

errorHandle.js
```
const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors 
}
```

billingCycleService.js

realizar a importação

```
const errorHandle = require('../common/errorHandler')
```

Adicionar a linha abaixo para interceptar apos var a requisição e colocar a msg

```
    BillingCycle.updateOptions({ new: true, runValidators: true })
    BillingCycle.after('post', errorHandle).after('put', errorHandle)
```

=====================

## ▶️ Configurando o Cors

- O cors serve para que a api possa ser acessada de outro dominio ou porta numa outra aplicação pode ser limitada ou não

Sempre o mideware tem que responder se não coloca next()

cors.js
```
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With', 'Content-Type, Accept')
    next()
}
```


server.js
```
const server = express()
**const allowCors = require('./cors')**

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())//pega todas as requisições json
**server.use(allowCors)**

```


=========================================

-Paginando a requisição

server.js

```
const queryParser = require('express-query-int')
server.use(queryParser())
```

para testar

```
http://localhost:3004/api/billingCycles?skip=0&limit=1
```

