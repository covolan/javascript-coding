var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

input = Number(input);

let ddds = new Map([
    [61, "Brasilia"],
    [71, "Salvador"],
    [11, "Sao Paulo"],
    [21, "Rio de Janeiro"],
    [32, "Juiz de Fora"],
    [19, "Campinas"],
    [27, "Vitoria"],
    [31, "Belo Horizonte"]
])

if (ddds.get(input) === undefined) {
    console.log("DDD nao cadastrado")
} else {
    console.log(ddds.get(input))
}

