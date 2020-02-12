function solve(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ((i - 1) >= 0 && (i + 1) < arr.length && j !== 0 && j !== arr[i].length - 1) {
                let hourGlassSum = arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
                if(hourGlassSum>maxSum){
                    maxSum = hourGlassSum;
                }
            }
        }
    }
    return maxSum;
}

solve([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]);