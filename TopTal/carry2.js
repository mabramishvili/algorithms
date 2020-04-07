let countCarrys = (x, y) => {
    let carry = 0, carryOperations = 0, max = Math.max(x, y), min = Math.min(x, y);
    while (min || max) {
        let currentSum = min % 10 + max % 10 + carry;
        if (currentSum >= 10) {
            carry = 1;
            carryOperations++;
        } else {
            carry = 0;
        }
        min = Math.floor(min / 10);
        max = Math.floor(max / 10);
    }
    return carryOperations;
};

let answer = countCarrys(999, 7);
console.log("answer", answer);
