var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 1; i <= Number(input); i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}