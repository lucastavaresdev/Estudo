import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    // estrategia de historico
    <Router history={hashHistory}>
        {/* rotas */}
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        {/* Caso tenha uma rota invalida redireciona para todos */}
        <Redirect from='*' to='/todos' />
    </Router>
)