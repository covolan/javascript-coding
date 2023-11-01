let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");
let numbers = lines.map((num) => {
  let tmpData = num.split(" ");
  tmpData = tmpData.map((data) => parseInt(data));
  return tmpData;
});

numbers.forEach((arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  if (sum !== 0 && !isNaN(sum)) {
    console.log(sum);
  }
});
