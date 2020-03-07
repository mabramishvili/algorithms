// Complete the candies function below.
function candies(n, arr) {
    let dp = new Array(arr.length).fill(1);
    if (arr.length === 1) {
        return arr[0];
    }
    traverse(arr, arr.length - 1, dp);
    return dp.reduce((a,b) => a + b);
}
let traverse = (arr, index, dp) => {
    if (index === 0) {
        if (arr[index] > arr[index + 1]) {
            dp[index] = dp[index + 1] + 1;
        }
        return dp[index];
    }
    if (index === arr.length - 1) {
        let prev = traverse(arr, index - 1, dp);
        if (arr[index] > arr[index - 1]) {
            dp[index] = prev + 1;
        }
        return dp[index];
    }

    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        let prev = traverse(arr, index - 1, dp);
        dp[index] = Math.max(prev, dp[index + 1]) + 1;
        return dp[index];
    }
    else if(arr[index] > arr[index -1]){
        let prev = traverse(arr, index - 1, dp);
        dp[index] = prev + 1;
        return dp[index];
    }
    else if(arr[index] > arr[index + 1]){
        dp[index] = dp[index + 1] + 1;
        traverse(arr, index-1, dp);
        return dp[index];
    }
    else{
        traverse(arr, index-1, dp);
        return dp[index];
    }
};


let n = 10;
let arr = [2, 2, 2, 6, 1, 7, 8, 9, 2, 1];
//
// 1,2,1,2,1,2,3,4,1,2

console.log(candies(n, arr));