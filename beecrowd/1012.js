var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

console.log("TRIANGULO: " + ((a * c)/2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * c * c).toFixed(3));
console.log("TRAPEZIO: " + ((a + b)/2 * c).toFixed(3));
console.log("QUADRADO: " + (b * b).toFixed(3));
console.log("RETANGULO: " + (a * b).toFixed(3));