var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let sorted = [];

for (let i = 0; i < lines.length; i++) {
    lines[i] = Number(lines[i]);
    sorted.push(lines[i]);
}

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < lines.length; i++) {
        if (sorted[i] > sorted[i + 1]) {
            let temp = sorted[i + 1];
            sorted[i + 1] = sorted[i];
            sorted[i] = temp;
        }
    }
}

if ((sorted[0] + sorted[1]) > sorted[2]) {
    console.log("Perimetro = " + (sorted[0] + sorted[1] + sorted[2]).toFixed(1));
} else {
    console.log("Area = " + (((lines[0] + lines[1]) * lines[2])/2).toFixed(1))
}

