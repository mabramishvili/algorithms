// Complete the absolutePermutation function below.
function absolutePermutation(n, k) {
    let used = {}, result = [];
    for (let i = 1; i <= n; i++) {
        let value1 = k + i <= n ? k + i : Infinity, value2 = i - k > 0 ? i - k : Infinity;
        if ((used[value1] || value1 === Infinity) && (used[value2] || value2 === Infinity))
            return [-1];
        let value = (value2 < value1 && !used[value2]) || used[value1] ? value2 : value1;
        used[value] = true;
        result.push(value);
    }
    return result;
}

let n = 8, k = 2;

console.log(absolutePermutation(n, k));