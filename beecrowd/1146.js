let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");
lines = lines.map((elem) => parseInt(elem));

lines.forEach((elem) => {
  let phrase = "";
  for (i = 1; i <= elem; i++) {
    phrase += `${i}`;
    if (i !== elem) {
      phrase += " ";
    }
  }
  if (elem) {
    console.log(phrase);
  }
});
