import React, {Component} from 'react'
import Main from '../templates/main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                    Cadastro de Usuario
            </Main>
        )
    }
}