var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let sec = Number(input);
let min = sec/60;
let ho = min/60;

let h = Math.trunc(ho);
let s = sec % 60;
let m = Math.trunc(min) - (h * 60);

console.log(h + ":" + m + ":" + s);
