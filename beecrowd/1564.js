let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

lines.forEach((elem) => {
  let tmpElem = parseInt(elem);
  let msg = "";

  if (tmpElem <= 0 && !isNaN(tmpElem)) {
    msg = "vai ter copa!";
  } else {
    msg = "vai ter duas!";
  }

  if (!isNaN(tmpElem)) {
    console.log(msg);
  }
});
