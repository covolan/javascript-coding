var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
// let r = lines;

// for (let i = 0; i < r.length; i++) {
//     let rTemp = Number(r[i]);
//     let rCube = rTemp * rTemp * rTemp;
//     let temp = (4/3.0) * pi * rCube;
//     console.log("VOLUME = " + temp.toFixed(3));
// }

let n = Number(input);
let nCube = n * n * n;
let tempN = (4/3.0) * pi * nCube;
console.log("VOLUME = " + tempN.toFixed(3));