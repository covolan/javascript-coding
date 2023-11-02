let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");
lines = lines.map((elem) => {
  let tmp = elem.split(" ");
  tmp = tmp.map((e) => parseInt(e));
  return tmp;
});

lines.forEach((pair) => {
  let a = pair[0];
  let b = pair[1];

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  if (a <= 0 || b <= 0 || isNaN(a) || isNaN(b)) {
    return;
  }
  let sum = 0;
  let print = "";

  for (a; a <= b; a++) {
    print += a + " ";
    sum += a;
  }
  console.log(`${print}Sum=${sum}`);
});
