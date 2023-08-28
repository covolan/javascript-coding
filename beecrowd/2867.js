var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 1; i <= Number(lines[0]); i++) {
    lines[i] = lines[i].split(" ");
}

let currentNumber = 0;

for (let i = 1; i <= Number(lines[0]); i++) {
    currentNumber = Math.pow(Number(lines[i][0]), Number(lines[i][1]));
    console.log((Math.log(currentNumber) * Math.LOG10E + 1).toFixed(0));
}
