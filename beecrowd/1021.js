var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = Math.trunc(Number(input));
let valorMoedas = Number(input) - valor;
let notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");

for (let i = 0; i < notas.length; i++) {
    let temp = valor % notas[i];
    let tot = (valor - temp) / notas[i];
    console.log(tot + " nota(s) de R$ " + notas[i].toFixed(2));
    valor -= notas[i] * tot;
}

console.log("MOEDAS:");
valor += valorMoedas;

for (let i = 0; i < moedas.length; i++) {
    let temp = valor % moedas[i];
    let tot = (valor - temp) / moedas[i];
    console.log(tot + " moeda(s) de R$ " + moedas[i].toFixed(2));
    valor -= moedas[i] * tot;
}