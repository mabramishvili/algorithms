// Complete the largestPermutation function below.
function largestPermutation(k, arr) {

    for (let i = 0; i < arr.length - 1 && k > 0; i++) {
        let curMaxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[curMaxIndex]) {
                curMaxIndex = j;
            }
        }
        if (curMaxIndex != i) {
            [arr[i], arr[curMaxIndex]] = [arr[curMaxIndex], arr[i]];
            k--;
        }
    }

    //console.log("result", arr);
    return arr;
}

let answer = largestPermutation(1, [2, 1]);
console.log("answer", answer);
