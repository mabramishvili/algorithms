// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    let matrices = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ], minOperations = Infinity;

    for (let matrix of matrices) {
        let countOperations = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < s[i].length; j++) {
                countOperations += Math.abs(s[i][j] - matrix[i][j]);
            }
        }
        minOperations = Math.min(minOperations, countOperations);
    }

    return minOperations;
}

let solution = formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5]]
);

console.log("answer", solution);