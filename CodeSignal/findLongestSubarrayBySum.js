// function findLongestSubarrayBySum(s, arr) {
//     let prefixSums = [], ansLength = 0, answer = [-1];
//     for (let key in arr) {
//         prefixSums[key] = (prefixSums[key - 1] || 0) + arr[key];
//         if (prefixSums[key] === s) {
//             ansLength = (parseInt(key) + 1) - 1;
//             answer = [1, parseInt(key) + 1];
//         }
//     }
//
//     let ind = 0;
//     while (prefixSums[ind] < s) ind++;
//
//     for (let i = ind; i < prefixSums.length; i++) {
//         let sum = prefixSums[i];
//         for (let j = 0; j < i; j++) {
//             if (sum - prefixSums[j] === s) {
//                 if (((i + 1) - (j + 2)) > ansLength) {
//                     ansLength = (i + 1) - (j + 2);
//                     answer = [j + 2, i + 1];
//                 }
//             }
//         }
//     }
//
//     if (answer.length === 1) {
//         for (let key of arr) {
//             if (arr[key] === s) {
//                 return [key + 1, key + 1];
//             }
//         }
//     }
//
//     return answer;
//
// }

function findLongestSubarrayBySum(s, arr) {
    let temp = [], l = 1, sum = 0, max = 0, ans = [-1];

    for(let i=0; i< arr.length; i++){
        temp.push(arr[i]);
        sum += arr[i];

        while (sum > s) {
            sum -= temp.shift();
            l += 1
        }

        if (sum === s && temp.length > max) {
            max = temp.length;
            ans = [l, i + 1]
        }
    }

    return ans;
}


console.log("ans", findLongestSubarrayBySum(3, [1, 15, 0, 3, 0]));
