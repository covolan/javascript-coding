var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let contPos = 0;
let contNeg = 0;
let contPar = 0;
let contImpar = 0;

for (let i = 0; i < 5; i++) {
    let temp = Number(lines[i]);
    if (temp > 0) {
        contPos++;
    } else if (temp < 0) {
        contNeg++;
    }
    
    if ((temp % 2) === 0) {
        contPar++;
    } else if (temp % 2 != 0) {
        contImpar++;
    }
}


console.log(contPar + " valor(es) par(es)");
console.log(contImpar + " valor(es) impar(es)");
console.log(contPos + " valor(es) positivo(s)");
console.log(contNeg + " valor(es) negativo(s)");