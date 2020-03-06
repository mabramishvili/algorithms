// Complete the balancedSums function below.
function balancedSums(arr) {
    let rightSum = arr.reduce((a, b) => a + b, 0), leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (rightSum - arr[i] === leftSum) {
            return 'YES';
        }
        rightSum -= arr[i];
        leftSum += arr[i];
    }
    return 'NO';
}

let answer = balancedSums([1, 2, 3]);
console.log(answer);
