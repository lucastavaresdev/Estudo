import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{

    state = {
        texto: '' 
    }

    alteraTexto = texto => {
        this.setState({texto})   
    }

    render(){
        return(
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                                        style={Padrao.input}
                                        onChangeText={this.alteraTexto}
                ></TextInput>
            </View>
        )
    }
}