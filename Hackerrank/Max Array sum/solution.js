// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    let dp = [];
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], arr[i]);
    }

    console.log(dp);

    return dp[arr.length - 1];
}


console.log(maxSubsetSum([-2, 1, 3, -4, 5]));