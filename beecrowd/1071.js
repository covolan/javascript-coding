var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines[0]);
let y = Number(lines[1]);
let soma = 0;

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

if (x < 0) {
    x += 1;
}

for (x; x < y; x++) {
    if(x % 2 !== 0) {
        soma += x;
    }
}
console.log(soma);
