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

for (let i = 0; i < lines.length; i++) {
    console.log(sorted[i]);
}

console.log()

for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}