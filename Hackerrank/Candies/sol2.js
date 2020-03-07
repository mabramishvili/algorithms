function candies(n, arr) {
    let dp = new Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && dp[i] <= dp[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && dp[i] <= dp[i + 1]) {
            dp[i] = dp[i + 1] + 1;
        }
    }
    return dp.reduce((a, b) => a + b);
}


let n = 10;
let arr = [2, 4, 2, 6, 1, 7, 5, 9, 2, 1];

console.log(candies(n, arr));