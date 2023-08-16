var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 2; i <= Number(input); i += 2) {
    console.log(i + "^2 = " + (Math.pow(i,2)));
}

