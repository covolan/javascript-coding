let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

for (j = 0; j < lines.length; j++) {
  let tempElem = parseInt(lines[j]);
  let totSum = 0;

  if (tempElem === 0) {
    break;
  }

  if (tempElem % 2 !== 0) {
    tempElem++;
  }

  for (let i = tempElem; i <= tempElem + 8; i += 2) {
    totSum += i;
  }
  console.log(totSum);
}
