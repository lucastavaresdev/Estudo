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

    1) Criar a pasta api
    2) Criar a pasta billingCycle
    2) Criar a arquivo billingCycle.js


 **billingCycle.js **
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