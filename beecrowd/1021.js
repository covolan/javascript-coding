var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let nota = Math.trunc(Number(input));
let moeda = Number(input) - Math.trunc(Number(input));

let notaValores = [100, 50, 20, 10, 5, 2];
let moedaValores = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")

for (let i = 0; i < notaValores.length; i++) {
    let temp = 0;
    if (nota > notaValores[i]) {
        temp = (nota - (nota % notaValores[i])) / notaValores[i];
        nota = nota - (temp * notaValores[i]);
    }
    console.log(temp + " nota(s) de R$ " + notaValores[i].toFixed(2));
}

console.log("MOEDAS:")
moeda += nota;

for (let i = 0; i < moedaValores.length; i++) {
    let temp = 0;
    if (moeda > moedaValores[i]) {
        temp = (moeda - (moeda % moedaValores[i])) / moedaValores[i];
        moeda = moeda - (temp * moedaValores[i]) + 0.00001;
    }
    console.log(temp.toFixed(0) + " moeda(s) de R$ " + moedaValores[i].toFixed(2));
}
