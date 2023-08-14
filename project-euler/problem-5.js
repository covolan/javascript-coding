function smallestMult(n) {
    let j = 2;
    while (true) {
        let contador = 0;
        for(let i = 1; i < n + 1; i++) {
            if (j % i == 0) {
                contador++;
            }
        }
        if (contador == n) {
            break
        }
        j += 2;
    }
    return j;
}

console.log(smallestMult(5));