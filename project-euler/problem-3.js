function largestPrimeFactor(number) {
    let bigger = 2;
    let tempNumber = number;
    for (let i = 2; i <= Math.sqrt(number) + 10; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = 1;
                break;
            }
        }
        
        if (flag === 0 && (number % i ===0)) {
            bigger = i;
            tempNumber /= i;
        }
        if (tempNumber === 1) {
            break;
        }
    }

    return bigger;
}

console.log(largestPrimeFactor(7));