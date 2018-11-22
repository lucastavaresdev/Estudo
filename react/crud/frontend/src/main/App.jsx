import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './app.css'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Main from '../components/templates/main'
import Footer from '../components/templates/footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Inicio" subtitle="Segundo Projeto do capitulo de React"/>
        <Footer />
    </div>