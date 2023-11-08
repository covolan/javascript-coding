let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

lines.shift();
lines = lines.map((elem) => parseInt(elem));
lines = lines.filter((elem) => !isNaN(elem));

lines.forEach((num) => {
  let primeFlag = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      primeFlag = 1;
      break;
    }
  }

  let msg = "";

  if (primeFlag) {
    msg = "nao eh primo";
  } else {
    msg = "eh primo";
  }

  console.log(`${num} ${msg}`);
});
