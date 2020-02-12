function concatenationsSum(a) {
    let lowSum = 0;
    let offsetSum = 0;
    for (let i = 0; i < a.length; i++) {
        lowSum += a[i];
        let size = a[i].toString().length;
        let offset = iPower(10, size);
        offsetSum += offset;
    }
    return lowSum * a.length + lowSum * offsetSum;
}

function iPower(base, power) {
    let result = 1;
    for (let i = 1; i <= power; i++)
        result *= base;
    return result;
}

let answer = concatenationsSum([10, 2]);
console.log("answer", answer);