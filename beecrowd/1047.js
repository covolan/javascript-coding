var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let hInicial = Number(lines[0]);
let mInicial = Number(lines[1]);
let hFinal = Number(lines[2]);
let mFinal = Number(lines[3]);


duracao = (hFinal * 60) - (hInicial * 60);

duracao += (mFinal - mInicial);

let hTot = Math.trunc(duracao / 60);
let mTot = duracao % 60;

if (hInicial === hFinal && mFinal === mInicial) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    console.log("O JOGO DUROU " + hTot + " HORA(S) E " + mTot + " MINUTO(S)");
}

