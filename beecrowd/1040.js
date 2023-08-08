var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");
var notas = lines[0].split(" ");

let media = 0;
let peso = [2, 3, 4, 1];

// console.log(lines, notas);

for (let i = 0; i < notas.length; i++) {
  media += Number(notas[i]) * peso[i];
}
media = media / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7) {
  console.log("Aluno aprovado.");
} else {
  if (media < 5) {
    console.log("Aluno reprovado.");
  } else {
    if (media >= 5 && media <= 6.9) {
      console.log("Aluno em exame.\n" + "Nota do exame: " + lines[1]);
      let mediaFinal = (Number(lines[1]) + media) / 2;
      if (mediaFinal >= 5) {
        console.log("Aluno aprovado.\n" + "Media final: " + mediaFinal.toFixed(1));
      } else {
        console.log("Aluno reprovado.\n" + "Media final: " + mediaFinal.toFixed(1));
      }
    }
  }
}
