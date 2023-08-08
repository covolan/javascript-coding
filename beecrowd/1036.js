var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

let delta = (b * b) - 4 * a * c;

if (delta < 0 || a === 0) {
    console.log("Impossivel calcular");
} else {
    console.log("R1 = " + ((-b + Math.sqrt(delta))/(2 * a)).toFixed(5) + "\n" + "R2 = " + ((-b - Math.sqrt(delta))/(2 * a)).toFixed(5));
}
