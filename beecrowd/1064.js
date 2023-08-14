var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let contador = 0;
let med = 0;

for (let i = 0; i < lines.length; i++) {
    if (Number(lines[i]) > 0) {
        med += Number(lines[i]);
        contador++;
    }
}

console.log(contador + " valores positivos\n" + (med/contador).toFixed(1));