let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");
let loopVal = parseInt(lines.shift()) * 2;

let bSort = (arr) => {
  let newArr = arr.slice(0, arr.length);
  let len = newArr.length;
  let swap;
  for (let j = 0; j < len; j++) {
    swap = false;
    for (k = 0; k < len - 1 - j; k++) {
      if (newArr[k] < newArr[k + 1]) {
        let tmp = newArr[k];
        newArr[k] = newArr[k + 1];
        newArr[k + 1] = tmp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return newArr;
};

for (let i = 1; i < loopVal; i += 2) {
  let tempArr = lines[i].split(" ");
  tempArr = tempArr.map((elem) => parseInt(elem));
  let nArr = bSort(tempArr);
  let len = nArr.length;
  let swapedStudents = len;
  for (let j = 0; j < len; j++) {
    if (tempArr[j] !== nArr[j]) {
      swapedStudents--;
    }
  }
  console.log(swapedStudents);
}
