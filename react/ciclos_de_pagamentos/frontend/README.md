# Criando o front end

Criar a pasta onde ficara o conteudo do projeto

Deve  instalar as dependencias antes de começar 

*por conta de uma atualização template AdminLTE deve-se usar a flog -E

```
$ npm init -y
$ npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 -E
$ npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 -E
$ npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0 -E
$ npm i --save-dev admin-lte@2.3.6 font-awesome@4.7.0 ionicons@3.0.0 -E
$ npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 redux@3.6.0 react-redux@4.4.6 redux-form@6.4.1 redux-multi@0.1.12 redux-promise@0.5.3 redux-thunk@2.1.0 react-redux-toastr@4.4.2 axios@0.15.3 lodash@4.17.4 -E
```

## Configurando o Webpack

Criar um arquivo 'webpack.config.js'

importar os modulos

```
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
```

realizar as configurações necessarias
```
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}
```

Logo após colocar o alterar os scrit no package.json

**package.json**
```
  "scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --hot",
    "production": "webpack --progress -p"
  },
```
## Criando a index

criar a pasta referenciada no webpack   

devServer: {
        port: 8080,
        contentBase: './public'
    },


```
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ciclos de pagamento</title>
    <link rel="stylesheet" href="app.css">
</head>

<body class="skin-blue fixed sidebar-mini">
    <div id="app"></div>
    <script src="app.js"></script>
</body>

</html>
```

## Criando componente index e app

criar na raiz a pasta de codigo fonte src
dentro de src criar uma pasta main e app.jsx
criar na pasta src inde.jsx


no app.jsx
```
import React from 'react'

export default props => (
    <div className="wrapper">
        <h1>App</h1>
    </div>
)
```


# Dependencias do tamplate admin LTE

Vamos criar a pasta de dependencias comuns no tamplate

```
src/common/template/dependecies.js
```

importar as dependecias do tamplate

```
import 'modules/admin-lte/plugins/jQueryUI/jquery-ui.min'
import 'modules/admin-lte/plugins/fastclick/fastclick'
import 'modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min'
import 'modules/admin-lte/dist/js/app.min'

import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/ionicons/dist/css/ionicons.min.css'
import 'modules/admin-lte/bootstrap/css/bootstrap.min.css'
import 'modules/admin-lte/dist/css/AdminLTE.min.css'
import 'modules/admin-lte/dist/css/skins/_all-skins.min.css'
import 'modules/admin-lte/plugins/iCheck/flat/blue.css'

import './custom.css'
```

criar o arquivo custom.css  para css customizado

importar no app.jsx

```
import '../common/template/dependecies'
import React from 'react'

export default props => (
    <div className="wrapper">
        <h1>App</h1>
    </div>
)
```

# Componente Cabeçalho


criar em na pasta tamplate criar

**header.jsx**

```
import React from 'react'

export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className='logo-mini'><b>My</b>M</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b>My</b>Money
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="#" className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)
```

**app.jsx**

```

import '../common/template/dependecies'
import React from 'react'

import Header from '../common/template/header'

export default props => (
    <div className="wrapper">
        <Header />
    </div>
)

```


