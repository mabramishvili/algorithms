// Complete the largestPermutation function below.
function largestPermutation(k, arr) {
    let indexes = {};
    for (let i = 0; i < arr.length; i++) {
        indexes[arr[i]] = i;
    }

    console.log(indexes);

    for (let i = 0; i < arr.length && k > 0; i++) {
        let optimalValue = arr.length - i;
        let optimalValueIndex = indexes[optimalValue];
        let currentValue = arr[i];

        arr[i] = optimalValue;
        indexes[optimalValue] = i;

        arr[optimalValueIndex] = currentValue;
        indexes[currentValue] = optimalValueIndex;

        k--;
    }

    return arr;
}

let answer = largestPermutation(1, [1, 2, 3, 4]);
console.log("answer", answer);
