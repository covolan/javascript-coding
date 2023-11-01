var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let val = parseInt(input);

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${val} = ${val * i}`);
}

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
