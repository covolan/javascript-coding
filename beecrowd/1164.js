let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

for (let i = 1; i <= parseInt(lines[0]); i++) {
  let tmpNumber = parseInt(lines[i]);
  let tmpArr = [];
  for (let j = 1; j <= tmpNumber / 2; j++) {
    if (tmpNumber % j === 0) {
      tmpArr.push(j);
    }
  }
  let sum = 0;
  if (tmpArr.length !== 0) {
    sum = tmpArr.reduce((prev, curr) => prev + curr);
  }
  let msg = "";
  if (sum === tmpNumber) {
    msg = "eh perfeito";
  } else {
    msg = "nao eh perfeito";
  }
  console.log(`${tmpNumber} ${msg}`);
}
