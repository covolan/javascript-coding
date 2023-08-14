var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
let j = Number(input);

while (i < 6) {
    if (j % 2 !== 0) {
        console.log(j);
        i++;
    }
    j++;
}