var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let start = parseInt(lines[0]);
let end = parseInt(lines[1]);
let temp = 0;
let sum = 0;

if (end < start) {
    temp = start;
    start = end;
    end = temp;
}

for (start; start <= end; start++) {
    if(start % 13 !== 0) {
        sum += start;
    }
}

console.log(sum);

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
