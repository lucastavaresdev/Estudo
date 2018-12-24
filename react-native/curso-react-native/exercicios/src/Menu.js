import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter ,{MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/evento'

export default createDrawerNavigator({
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Ano: " ano={18}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={2}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />,
    },
    ParImpar: {
        screen: () => <ParImpar numeros={30} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel' />
    }
},{ drawerWidth: 300 })