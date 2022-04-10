const LeitorDeTexto = require('./Leitor')

const [A, B] = LeitorDeTexto().map(string => Number(string))

const SOMA = A + B

console.log(`SOMA = ${SOMA}`)
