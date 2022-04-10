const LeitorDeTexto = require('./Leitor')

let lines = LeitorDeTexto()
const [A, B, C, D] = lines

console.log(`DIFERENCA = ${A * B - C * D}`)

// concluido
