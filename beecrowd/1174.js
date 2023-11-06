let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

lines = lines.map((elem) => parseFloat(elem));

i = 0;

lines.forEach((elem) => {
  if (elem <= 10) {
    console.log(`A[${i}] = ${elem.toFixed(1)}`);
  }
  i++;
});
