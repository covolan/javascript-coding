var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let values = [0, 4, 4.50, 5, 2, 1.50];

let a = Number(lines[0]);
let b = Number(lines[1]);

console.log("Total: R$ " + (values[a] * b).toFixed(2));
