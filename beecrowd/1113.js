var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; i < lines.length; i++) {
    let tempArr = lines[i].split(" ");
    if (parseInt(tempArr[0]) > parseInt(tempArr[1])) {
        console.log("Decrescente");
    } else if (parseInt(tempArr[0]) < parseInt(tempArr[1])) {
        console.log("Crescente");
    }
}

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
