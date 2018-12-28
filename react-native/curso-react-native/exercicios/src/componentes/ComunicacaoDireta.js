import React from 'react'
import {View, Text} from 'react-native'

const fonte = {style: {fontSize : 30}}

function filhoscomProsp(props){
     return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props})
        )
}

export const Filho = props =>
    <View>
        <Text {...props}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

    export const Pai = props =>
        <View>
            <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
            {/* {props.children} */}
            {/* {React.Children.map(props.children, 
                c => React.cloneElement(c, {...props, ...c.props})
                )} */}
                {filhoscomProsp(props)}
        </View>


export const Avo = props => 
<View>
<Text {...fonte}>avo: {props.nome} {props.sobrenome}</Text>
            <Pai nome='André' sobrenome={props.sobrenome}>
                <Filho nome='Ana' />
            </Pai>
            <Pai {...props} nome='Pedro'>
                <Filho nome='Rebeca' />
            </Pai>
</View>

export default Avo