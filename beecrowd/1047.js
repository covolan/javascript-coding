var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let hInicial = Number(lines[0]); 
let mInicial = Number(lines[1]);
let hFinal = Number(lines[2]);
let mFinal = Number(lines[3]);

let totH = hFinal - hInicial;
let totM = mFinal - mInicial;

if (totH < 0) {
    totH = 24 + totH;
}

if (totM < 0) {
    totM = 60 + totM;
    totH--;
}

if (totH < 0) {
    totH = 24 + totH;
}

if (hInicial == hFinal && mInicial == mFinal) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    console.log("O JOGO DUROU " + totH + " HORA(S) E " + totM + " MINUTO(S)");
}
