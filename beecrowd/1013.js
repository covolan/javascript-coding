var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

a = Number(lines[0]);
b = Number(lines[1]);
c = Number(lines[2]);

let maior = (a + b + Math.abs(a - b))/2;
if (c > maior) {
    maior = c;
}
console.log(maior + " eh o maior")