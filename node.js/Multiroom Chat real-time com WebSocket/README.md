# Multiroom Chat

Express

### Base para um projeto Express
```
    Express
    Ejs
    Consign 
    Express-Validator
    Body-parser
```

### Init

1) Criar diretório e repositorio do projeto 
2) Git Ignore
3) Iniciar o NPM (NPM init
4) Express
5) EJS (ou outra engine)
6) Consign
7) Body-Parser
8) Express-validator


### Estrutura do Projeto
```
            Nome_do_projeto/
            ├── app/
                     ├── controllers/
                     ├── models/
                     ├── public/
                              ├──css/
                              ├──images/
                              ├──js/
                     ├── routes/
                     ├── views/
            ├── config/
                        ├── server.js
            ├── node_modules/
            ├── .gitignore
            ├── app.js
            ├── package.json
            ├── README.md
```

###Criando o servidor

 1) app.js
    
    ```
        /*importar as configurações do  servidor*/

        var app = require('./config/server');

        /*Parametrizar a porta de esculta  */
        app.listen(80, function(){
            console.log('Servidor Online');
        });

    ```

    2) Server.js

    ```
            /*Importar o modulo do framework express */
            var express = require('express');

            /*Importar o modulo do consign */
            var consign = require('consign');

            /*Importar o modulo do body-parser */
            var bodyParser = require('body-parser');

            /*Importar o modulo do express-validator */
            var expressValidator = require('express-validator');


            /*Iniciar o objeto express */
            var app = express();


            /*Setar as variaveis de 'view engine e views do express'*/
            app.set('view engine', 'ejs');
            app.set('views', './app/views');

            /*Configurar os middleware express.static*/
            app.use(express.static('./app/public'));

            /*configurar o middeware body-parser (recupera os submit do formulario em json se tiver o mesmo nome dos campos na tabela)*/
            app.use(bodyParser.urlencoded({extended: true}))

            /*configurar o body-parser express-validator*/
            app.use(expressValidator());

            /*efetua o autoload das rotas, dos modulos e dos controllers para o objeto app*/
            consign()
            .include('app/routes')
                .then('app/models')
                .then('app/controllers')
                .into(app);

            /* exportar o objeto app */
            module.exports = app;
    ```
---------------------------------------------------