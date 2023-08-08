var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let tot = Number(input);

let y = Math.trunc(tot / 365);
let m = Math.trunc((tot - (y * 365)) / 30);
let d = ((tot - (y * 365)) - m * 30);

console.log(y + " ano(s)\n" + m + " mes(es)\n" + d + " dia(s)");
