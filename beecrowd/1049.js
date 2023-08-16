var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const ave = {
    "carnivoro" : "aguia",
    "onivoro" : "pomba"
}

const mamifero = {
    "onivoro" : "homem",
    "herbivoro" : "vaca"
}

const inseto = {
    "hematofago" : "pulga",
    "herbivoro" : "lagarta"
}

const anelideo = {
    "hematofago" : "sanguessuga",
    "onivoro" : "minhoca"
}

function readProp (obj, prop) {
    return obj[prop];
}

if(lines[1] == "ave") {
    console.log(readProp(ave, lines[2]));
}
if(lines[1] == "mamifero") {
    console.log(readProp(mamifero, lines[2]));
}
if(lines[1] == "inseto") {
    console.log(readProp(inseto, lines[2]));
}
if(lines[1] == "anelideo") {
    console.log(readProp(anelideo, lines[2]));
}