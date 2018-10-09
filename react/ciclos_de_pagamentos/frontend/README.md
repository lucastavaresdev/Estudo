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


## Dependencias do tamplate admin LTE

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

## Componente Cabeçalho


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


## Componente Menu

Criar 2 arquivos de componentes menu.jsx e sidebar.jsx



**menu.jsx**
```
import React from 'react'

export default props => (
    <ul className="sidebar-menu">

    </ul>
)
```

**sidebar.jsx**
```
import React from 'react'
import Menu from './menu'

export default props => (
    <aside className="main-sidebar">
        <section className="sidebar">
            <Menu />
        </section>
    </aside>
)


```

**app.jsx**

```
import SideBar from '../common/template/sidebar'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
    </div>
)
```
## Componente Menu Item


criar um arquivo jsx em tamplate chamado menuItem.jsx

**menuitem.jsx**
```
import React from 'react'

export default props => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i>{props.label}
        </a>
    </li>
)
```

**menu.jsx**
```
import React from 'react'
import MenuItem from './menuitem'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
    </ul>
)
```
## Componente Menu Item com submenu (menutree)

cria-se um arquivo menuTree

**menutree.jsx**
```
import React from 'react'

export default props => (
    <li className="treeview">
        <a href="">
            <i className={`fa fa-${props.icon}`}>{props.label}</i>
            <i className="fa fa-angle-left pull-right"></i>
        </a>
        <ul className="treeview-menu">
            {props.children}
        </ul>
    </li>
)

```
**Menu.jsx**
```
    import React from 'react'
    import MenuItem from './menuitem'
    import MenuTree from './menuTree'

    export default props => (
        <ul className="sidebar-menu">
            <MenuItem path='#/' label='Dashboard' icon='dashboard' />
            <MenuTree label='Cadastro' icon='edit'>
                <MenuItem path='#/billingCycles' label='Ciclos de Pagamentos' icon='usd' />
            </MenuTree>
        </ul>
    )
```

## Componente Footer

Criar footer.jsx

**footer.jsx**
```
    import React from 'react'


    export default props => (
        <footer className="main-footer">
            <strong>
                Copyright &copy; 2018
                <a href="#" target='' _blank>Lucas Tavares</a>

            </strong>
        </footer>
    )
```

**app.jsx**

```
import '../common/template/dependecies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <h1>Conteudo</h1>
        </div>
        <Footer />
    </div>
)
```

## React Router

Criar o caminho src/billingCycle/billingCycle.jsx  e src/dashboard.jsx


**dashboard.jsx**

```
import React from 'react'

export default props => (
    <div>
        <h1>Dashboard</h1>
    </div>
)

```

**billingCycle.jsx**

```
import React from 'react'

export default props => (
    <div>
        <h1>Ciclos de Pagamento</h1>
    </div>
)

```

Para criar as Rotas

criar o caminho  main/routes.jsx

**routes.jsx**
```
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Router path='/' component={Dashboard} />
        <Router path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)
```

**app.jsx**

```
import '../common/template/dependecies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)
```


## Titulo de Conteudo

Criar dois arquivos na pasta template content.jsx e contentHeader.jsx


**contentHeader.jsx**
```
import React from 'React'

export default props => (
    <section className="content-header">
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)
```


**contentHeader.jsx**
```
import React from 'react'

export default props => (
    <section className="content">{props.children}</section>
)
```




**O dashboard sera transformado em um componente de classe**




**dashboard.jsx**
```
import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard
```

## Componente Grid

Criar common/layout/grid.jsx

**grid.jsx**
```
import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ' '

        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[1]) classes += `col-sm-${cols[1]}`
        if (cols[2]) classes += `col-md-${cols[2]}`
        if (cols[3]) classes += `col-lg-${cols[3]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || '12')
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}
```


## ValueBox


**valuebox.jsx**
```
import React from 'react'
import Grid from '../layout/grid'


export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className="icon">
                <div className={`fa fa-${props.icon}`}></div>
            </div>
        </div>
    </Grid>
)
```

## Usando o valueBox

**row.jsx**
```
import React from 'react'

export default props => (
    <div className="row">{props.children}</div>
)
```


**dashboard.jsx**
```
        import React, { Component } from 'react'

        import ContentHeader from '../common/template/contentHeader'
        import Content from '../common/template/content'
        import ValueBox from '../common/widget/valuebox'
        import Row from '../common/layout/row';

        class Dashboard extends Component {
            render() {
                return (
                    <div>
                        <ContentHeader title='Dashboard' small='Versão 1.0' />
                        <Content>
                            <Row>
                                <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Total de Creditos' />
                                <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10' text='Total de Debitos' />
                                <ValueBox cols='12 4' color='blue' icon='money' value='R$ 10' text='Total Consolidado' />
                            </Row>
                        </Content>
                    </div>
                )
            }
        }

        export default Dashboard
```


# Colocando o Redux na Aplicação

## Configurando o redux

- Na pasta main criar um arquivo que ira controlar os reducer (reducers.js)


**reducers.js**
```
//importando  o redux
import { combineReducers } from 'redux'

//criado uma função pura recebe dos paramentro o estado atual(store) e a ação
//
const rootReducer = combineReducers({
    dashboard: () => ({ sumary: { credit: 100, deb: 50 } })
})

//exportando o reducer
export default rootReducer
```

# Integrando React redux

importar na dashboard um metodo do redux

**dashboard**
```
import { connect } from 'react-redux'
```

antes de exportar é criado uma constante

```
const mapStateToProps = state => ({summary: state.dashboard.summary})
```

dashboard é referente a esta linha e o que foi criado la no reducer

**reducer.js**
```
   dashboard: () => ({ sumary: { credit: 100, deb: 50 } })
```

voce exporta e mostra para o redux o objeto
```
const mapStateToProps = state => ({ summary: state.dashboard.summary })
export default connect(mapStateToProps)(Dashboard)
```

dentro da classe vc extrai o sumario

```
const {credit, debt} = this.props.summary
```

apontar onde sera usada a variavel


### ficou desta forma 

**reducer.js**

```
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({ summary: { credit: 120, debt: 50 } })
})

export default rootReducer
```

**Dashboard.jsx**
```
import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valuebox'
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {

        const { credit, debt } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Creditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Debitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Total Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


const mapStateToProps = state => ({ summary: state.dashboard.summary })
export default connect(mapStateToProps)(Dashboard)
```

agora o reducer verdadeiro


Criar na pasta dashboard/dashboard.reducer.js

**dashboard.reducer.js**
```
const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }

export default function (state = INITIAL_STATE, action) {
    return state
}

```
**reducers.js**
```
import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboard.reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer

```

# Integrando Redux - action creators

**dashboardActions.js**

```
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
```


**dashboard.reducer.js.js**

```

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}
```

 - Ligando o reducer ao dashboard

 no dashboard fazer as importações


### dashboard

```
    import { bindActionCreators } from 'redux'
    import { getSummary } from './dashboardActions'
```

depois é criado o dispach que faz a ligação todas as actions creators liga com o dispash e retorna para todo os reducers da aplicação
```
    const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
```

depois ele é ligado

```
    export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
```
quando o metodo é rederizado

```
    componentWillMount() {
        this.props.getSummary()
    }
```

na index é colocado estas linhas para aguardar o retorno

```
//importa o middleware
import { applyMiddleware, createStore } from 'redux'

//importa a promisse
import promise from 'redux-promise'
//só libera o reducer após a a resulução da promisse
const store = applyMiddleware(promise)(createStore)(reducers)
```


** index.jsx **
```
import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

import promise from 'redux-promise'


const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))
```

## Colocando o reduxdevTools


baixar o reduxdevTools

index.jsx

linhas inseridas
```
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)
```


```
import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))
```

----------------------------------------------------------------


# Visão Geral ciclos de pagamento

## Refatorando o billing Cycles passando para componente de classe

```
import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    Ciclos de pagamento

                </Content>
            </div>
        )
    }
}

export default BillingCycle
```

## Componentes extruturais de abas

Criar 3 componentes

common/tab/tabs.jsx
```
import React from 'react'

export default props => (
    <div className="nav-tabs-custom">
        {props.children}
    </div>
)

```

common/tab/tabsContent.jsx

```
import React from 'react'

export default props => (
    <div className="tab-content">
        {props.children}
    </div>
)
```

common/tab/tabsHeaders.jsx

```
import React from 'react'

export default props => (
    <div className="tab-content">
        {props.children}
    </div>
)
```

agora deve-se importar na pagina ciclos de pagamento (Billing Cycles)

```
import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

** import Tabs from '../common/tab/tabs'
import TabsHeaders from '../common/tab/tabsHeaders'
import TabsContent from '../common/tab/tabsContent' **

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                  
                  **  <Tabs>
                        <TabsHeaders>


                        </TabsHeaders>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                    **
                </Content>
            </div>
        )
    }
}

export default BillingCycle
```

## Componente TabHeader


common/tab/tabHeader.jsx


```
import React, { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;'
                    data-toggle='tab'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`} ></i>
                    {this.props.label}
                </a>
            </li>
        )
    }
}

export default TabHeader
```

BillingCyclos.jsx Ciclos de Pagamento
```
          <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeaders>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                        </TabsHeaders>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
```


## Criando a primeira Action e o Reducer

Criar na pasta tab/tabAction

```
export function selectTab(tabId) {
    console.log(tabID)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
```

Agora criamos o reducer da ação

tab/tebReducer

```
const INITIAL_STATE = { selected: ' ' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        default:
            return state
    }
}
```

No main reducer devese importar

main/reducers
```
const INITIAL_STATE = { selected: ' ' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        default:
            return state
    }
}
```


## Componente TabHeader: Conectando com Redux


importar no tabHeader.jsx
```
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        return (
            <li className={selected ? 'active' : ' '}>
                <a href='javascript:;'
                    data-toggle='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}


const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
```
## Compoenente tab content


Componente de classe sem o  redux

tabContent.jsx
```
import React, { Component } from 'react'

class TabContent extends Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}
```

colocando o redux
tabContent.jsx
```
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class TabContent extends Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)
```

tabContent.jsx colocando a classe de ativo

```
class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        return (
            <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ' '}`}>
                {this.props.children}
            </div>
        )
    }
}
```

billingCycles.jsx
```
  <TabsContent>
    <TabContent id='tabList'><h1>Lista</h1></TabContent>
    <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
    <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
    <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
 </TabsContent>
```

## Componente BillingCycles
```
```

```
```
```
```

