const _ = require('lodash')


const alunos = [{
    nome: 'joao',
    nota: 7.6
}, {
    nome: 'Maria',
    nota: 8.6
}]

const media = _.sumBy(alunos, 'nota')
console.log(media)