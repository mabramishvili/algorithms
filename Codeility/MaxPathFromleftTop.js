let solution = (A) => {
    let dp = new Array(A.length + 1);
    for (let i = 0; i < A.length + 1; i++) {
        dp[i] = new Array(A[0].length + 1).fill(0);
    }

    for (let i = 1; i < A.length + 1; i++) {
        for (let j = 1; j < A[0].length + 1; j++) {
            dp[i][j] = A[i - 1][j - 1] + Math.max(dp[i - 1][j], dp[i][j - 1]) * 10;
        }
    }

    return dp[A.length][A[0].length];
};


let answer = solution([
    [9,9,7],
    [9,7,2],
    [6,9,5],
    [9,1,2]
]);

console.log("answer", answer);
