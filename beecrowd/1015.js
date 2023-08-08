var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let xy1 = lines[0].split(' ');
let xy2 = lines[1].split(' ');

let x1 = Number(xy1[0]);
let y1 = Number(xy1[1]);
let x2 = Number(xy2[0]);
let y2 = Number(xy2[1]);


let d1 = (x2 - x1) * (x2 - x1);
let d2 = (y2 - y1) * (y2 - y1);

console.log((Math.sqrt((d1) + (d2))).toFixed(4));
