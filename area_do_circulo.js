//area = π.raio2
const LeitorDeTexto = require('./Leitor')

const [raio] = LeitorDeTexto()
const n = 3.14159

console.log(`A=${(n * Math.pow(raio, 2)).toFixed(4)}`)
