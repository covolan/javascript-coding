function fiboEvenSum(n) {
    let fib = [1, 2];
    let sum = 0;
    for (let i = 0; i < n - 2; i++) {
        fib.push(fib[i] + fib[i + 1]);
        if ((fib[i] % 2) === 0 && fib[i] <= n) {
            sum += fib[i];
        }
        if (fib[i] >= n) {
            break;
        }
    }
    return sum;
}

console.log(fiboEvenSum(4000000));
