// function arrayMaxConsecutiveSum2(inputArray) {
//     let max = inputArray[0];
//     let curMax = max;
//     for (let i = 1; i < inputArray.length; i++) {
//         curMax = Math.max(inputArray[i], curMax + inputArray[i]);
//         max = Math.max(curMax, max);
//     }
//
//     return max;
//
// }

// function arrayMaxConsecutiveSum2(inputArray) {
//     for(let i=1; i<inputArray.length; i++){
//         inputArray[i] = Math.max(inputArray[i], inputArray[i] + inputArray[i-1]);
//     }
//     return Math.max.apply(null, inputArray);
// }

let max = -Infinity;

function findSum(arr, index) {
    if (index === 0)
        return arr[0];
    let answer = Math.max(arr[index], findSum(arr, index - 1) + arr[index]);
    max = Math.max(max, answer);
    return answer;
}

function arrayMaxConsecutiveSum2(inputArray) {
    findSum(inputArray, inputArray.length - 1);
    return max;
}


let answer = arrayMaxConsecutiveSum2([-2, 2, 5, -11, 6]);
console.log("answer", answer);