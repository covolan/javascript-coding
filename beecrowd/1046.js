var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let hInicial = Number(lines[0]);
let hFinal = Number(lines[1]);

if (hInicial > hFinal) {
    hora = 24 - hInicial + hFinal;
    console.log("O JOGO DUROU "+hora+" HORA(S)");
} else {
    if (hFinal > hInicial) {
        hora = hFinal - hInicial;
        console.log("O JOGO DUROU "+hora+" HORA(S)");
    } else {
        if (hFinal === hInicial)
        console.log("O JOGO DUROU 24 HORA(S)");
    }
}
