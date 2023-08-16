var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let dentro = 0;
let fora = 0;

for (let i = 1; i < Number(lines[0]) + 1; i++) {
    if (Number(lines[i]) >= 10 && Number(lines[i]) <= 20) {
        dentro++;
    } else {
        fora++;
    }
}
console.log(dentro + " in\n" + fora + " out");