var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

for (let i = 0; i < lines.length; i++) {
    lines[i] = Number(lines[i]);
}

for (let i = 0; i < lines.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < lines.length - i - 1; j++) {
        if (lines[j] < lines[j + 1]) {
            temp = lines[j];
            lines[j] = lines[j + 1];
            lines[j + 1] = temp;
            swap = true;
        }
    }
    if (swap === false) {
        break;
    }
}

let a = lines[0];
let b = lines[1];
let c = lines[2];

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a * a === b * b + c * c) {
        console.log("TRIANGULO RETANGULO");
    }
    if (a * a > b * b + c * c) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (a * a < b * b + c * c) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    } else {
        if (a === b || b === c || c === a) {
            console.log("TRIANGULO ISOSCELES");
        }
    }
}

