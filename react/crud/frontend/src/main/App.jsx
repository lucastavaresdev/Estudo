import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './app.css'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Footer from '../components/templates/footer'

import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'

export default props =>
   <BrowserRouter>
   <div className="app">
            <Logo />
            <Nav />
            <Routes/>
            <Footer />
        </div>
    </BrowserRouter>