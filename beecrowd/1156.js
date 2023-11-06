let s = 1;
let j = 2;

for (i = 3; i < 40; i += 2) {
  s += i / j;
  j *= 2;
}

console.log(s.toFixed(2));
