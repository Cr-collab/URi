function LeitorDeTexto() {
  let input = require('fs').readFileSync('stdin', 'utf8')
  let lines = input.split('\n')

  return lines
}

module.exports = LeitorDeTexto
