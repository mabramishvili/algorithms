// Complete the maxMin function below.
function maxMin(k, arr) {
    arr = arr.sort((a, b) => a - b);
    let min = Infinity, check = k - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + check] && arr[i + check] - arr[i] < min) {
            min = arr[i + check] - arr[i];
        }
    }
    return min;
}

let answer = maxMin(2, [1,2,1,2,1]);
console.log("ans", answer);