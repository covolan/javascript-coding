var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

function calcperc (n, perc) {
    let tot = n + (n * perc);
    console.log("Novo salario: " + tot.toFixed(2));
    console.log("Reajuste ganho: " + (n * perc).toFixed(2));
    console.log("Em percentual: " + (perc * 100).toFixed(0) + " %");
}

let values = [0, 400, 800, 1200, 2000];
let percentages = [0.15, 0.12, 0.10, 0.07, 0.04];

input = Number(input);

for (let i = 0; i < 5; i++) {
    if (input > values[i] && input <= values[i + 1]) {
        calcperc(input, percentages[i]);
        break;
    } else {
        if (input > values[4]){
            calcperc(input, percentages[4]);
            break;
        }
    }
}
