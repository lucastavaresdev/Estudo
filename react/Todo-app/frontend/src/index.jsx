import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app';
import reducers from './main/reducers'

//O arquivo reducer.js(é um reducer) exporta a função com os dados, esses dados são criando 
//uma store um especie de casulo de dados que é armazenado numa constante depois essa constante é passado 
// em um provider com a variavel no qual eu posso passar o dado para qualquer componente
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))