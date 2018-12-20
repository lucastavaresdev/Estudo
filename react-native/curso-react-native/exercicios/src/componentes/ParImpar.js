import React from 'react'
import { View,   Text} from 'react-native'
import Padrao from '../estilo/Padrao'

export default function(props){
        <View>
                {
                    props.numero % 2 == 0
                    ? <Text style= {Padrao.ex}>par</Text>
                    : <Text style= {Padrao.ex}>Impar</Text>
                }
        </View>
}