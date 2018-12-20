import React, {Component} from 'react'
import { View,   StyleSheet} from 'react-native'

import Simples from './componentes/Simples'
import {ParImpar} from './componentes/ParImpar'

export default class App extends Component {
  render() {
    return(
          <div>
            <Simples texto='Asd Flexivel'/>
           <ParImpar numero={31} />
      </div>     
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f20: {
      fontSize: 40
    }
})