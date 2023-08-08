var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let km = Number(input)

console.log(km * 2 + " minutos")
