let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

lines = lines.map((elem) => parseFloat(elem));
let len = lines.length;

let media = 0;
let medFlag = 0;

for (let i = 0; i < len; i++) {
  if (medFlag === 2) {
    console.log(`media = ${(media / 2).toFixed(2)}`);
    medFlag++;
  }

  if (lines[i] >= 0 && lines[i] <= 10 && !isNaN(lines[i]) && medFlag < 2) {
    media += lines[i];
    medFlag++;
  } else if (medFlag < 2) {
    console.log("nota invalida");
  }

  if (medFlag === 3) {
    console.log("novo calculo (1-sim 2-nao)");
    if (lines[i] === 1) {
        medFlag = 0;
        media = 0;
    } else if (lines[i] === 2) {
        break;
    }
  }
}
