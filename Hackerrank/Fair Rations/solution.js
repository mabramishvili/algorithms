function fairRations(B) {
    let count = 0, sum = 0;
    for (let el of B) {
        sum += el;
        count += (sum % 2 === 1) * 2;
    }
    return sum % 2 === 0 ? count : "NO";
}

let B = [2, 3, 4, 5, 6];