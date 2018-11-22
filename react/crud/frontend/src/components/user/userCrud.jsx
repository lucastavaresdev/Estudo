import React, {Component} from 'react'
import Main from '../templates/main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const InitialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
   
    state = { ...InitialState}
  
    clear(){
        this.setState({user: InitialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/{user.id}` : baseUrl
        axios[method](url,user)
            .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    .this.setState({ user: InitialState.user, list })
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !==user.id)
        list.unshift(user)
        return list
    }
   
    render(){
        return(
            <Main {...headerProps}>
                    Cadastro de Usuario
            </Main>
        )
    }
}