var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const [A, B, C, D] = lines

console.log(`DIFERENCA = ${A * B - C * D}`)

// concluido
