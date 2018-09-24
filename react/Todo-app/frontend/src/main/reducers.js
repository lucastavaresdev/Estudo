import { combineReduces } from 'react'

const rootReducer = combineReduces({
    todo: () = ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar Fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe as 10h',
            done: false
        }, {
            _id: 3,
            description: 'Consulta medica na terça',
            done: false
        }]
    })
})

export default rootReducer