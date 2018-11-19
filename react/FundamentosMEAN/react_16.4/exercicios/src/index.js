import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render (
    <Pai nome='Paulo' sobrenome='Silva'  >
        <Filho nome='Pedro' />
    </Pai>

, document.getElementById('root'))