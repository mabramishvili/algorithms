function nonDivisibleSubset(k, s) {
    let map = {}, length = 0;
    for (let i = 0; i < k; i++) {
        map[i] = 0;
    }
    for (let val of s) {
        map[val % k] = map[val % k] + 1 || 1;
    }
    length += !!map[0];
    for (let i = 1; i <= k / 2; i++) {
        let r = k - i;
        if (i === r) {
            length += !!map[i];
        } else {
            length += Math.max(map[i], map[r]);
        }
    }
    return length;
}

let s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436];
let k = 7;
console.log(nonDivisibleSubset(k, s));
