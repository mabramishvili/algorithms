// Complete the countTriplets function below.
// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let map = {}, leftMap = {}, counter = 0;
    for (let val of arr) {
        map[val] = map[val] + 1 || 1;
    }
    for (let val of arr) {
        let lhs = val % r === 0 ? val / r : -Infinity, rhs = val * r;
        map[val] = map[val] - 1;
        counter += (map[rhs] || 0) * (leftMap[lhs] || 0);
        leftMap[val] = leftMap[val] + 1 || 1;
    }
    return counter;
}

let result = countTriplets([1, 2, 2, 4], 2);
console.log("ANSWER", result);