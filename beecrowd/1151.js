let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

let n = parseInt(lines[0]);

function fib(n) {
  let fibList = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    fibList.push(fibList[i - 1] + fibList[i]);
  }
  let phraseOut = "";
  fibList.forEach((elem) => {
    phraseOut += `${elem} `;
  });
  console.log(phraseOut.trim());
}

fib(n);
