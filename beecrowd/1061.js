var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let mI = lines[1].split(' ');
let mF = lines[3].split(' ');

let diaInicial = Number(lines[0].match(/\d+/));
let diaFinal = Number(lines[2].match(/\d+/));

let hInicial = parseInt(mI[0]);
let mInicial = parseInt(mI[2]);
let sInicial = parseInt(mI[4]);

let hFinal = parseInt(mF[0]);
let mFinal = parseInt(mF[2]);
let sFinal = parseInt(mF[4]);

let hTot = hFinal - hInicial;
let mTot = mFinal - mInicial;
let sTot = sFinal - sInicial;
let dTot = diaFinal - diaInicial;

if (sTot < 0) {
    sTot = 60 + sTot;
    mTot--;
}

if (mTot < 0) {
    mTot = 60 + mTot;
    hTot--;
}

if (hTot < 0) {
    hTot = 24 + hTot;
    dTot--;
}

if (dTot < 0) {
    dTot = 30 + dTot;
}


if (sTot < 0) {
    sTot = 60 + sTot;
    mTot--;
}

if (mTot < 0) {
    mTot = 60 + mTot;
    hTot--;
}

if (hTot < 0) {
    hTot = 24 + hTot;
    dTot--;
}

if (dTot < 0) {
    dTot = 30 + dTot;
}

console.log(`${dTot} dia(s)\n${hTot} hora(s)\n${mTot} minuto(s)\n${sTot} segundo(s)`);