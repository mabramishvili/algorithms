// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => a - b);
    let min = Math.abs(arr[1] - arr[0]);
    for (let i = 2; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < min) {
            min = diff;
        }
    }
    return min;
}

let solution = minimumAbsoluteDifference([3,-7,0]);
console.log("answer", solution);
