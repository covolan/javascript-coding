let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

lines = lines.map((elem) => parseInt(elem));

const fib = (n) => {
  let fibList = [0, 1];
  for (let i = 1; i < n; i++) {
    fibList.push(fibList[i] + fibList[i - 1]);
  }
  return fibList[n];
};

for (i = 1; i <= lines[0]; i++) {
  let tmpFib = fib(lines[i]);
  console.log(`Fib(${lines[i]}) = ${tmpFib}`);
}
