function largestPalindromeProduct(n) {
    let temp = Math.pow(10, n) - 1;
    let largest = 0;
    for (let i = temp; i > 1; i--) {
        for (let j = temp; j > 1; j--) {
            let tempN = i * j;
            let s = tempN.toString();
            let sTempArr = s.split("");
            sTempArr = sTempArr.reverse();
            let sTemp = sTempArr.join("");
            if (s === sTemp && Number(s) > largest) {
                largest = Number(s);
            }
        }
    }
    return largest;
}

console.log(largestPalindromeProduct(3));