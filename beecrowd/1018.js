var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = Number(input);
let notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1];
console.log(valor);

for (let i = 0; i < notas.length; i++) {
    let temp = valor % notas[i];
    let tot = (valor - temp) / notas[i];
    console.log(tot + " nota(s) de R$ " + notas[i] + ",00");
    valor -= notas[i] * tot;
}
