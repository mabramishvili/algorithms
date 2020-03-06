let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]], curMax = 0, maxSteps = [0, 0, 0, 0];

let findMaxPath = (matrix) => {
    let coords = [], max = 0;
    for (let i = 0; i < matrix.length; i++) {
        max = Math.max(max, ...matrix[i]);
        curMax = max;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === max) {
                coords.push([i, j, matrix[i][j], -1, -1, 1]);
            }
        }
    }

    for (let start of coords) {
        traverse(start, matrix);
    }

    return curMax;

};

let traverse = (start, matrix) => {
    let [x, y, current, prevX, prevY, step] = start;
    maxSteps[step - 1] = parseInt(current);
    if (step === 4) {
        if (parseInt(current) > curMax) {
            curMax = parseInt(current);
        }
        return current;
    }
    for (let dir of directions) {
        let nextX = x + dir[0], nextY = y + dir[1], nextStep = step + 1;
        if (matrix[nextX] && matrix[nextX][nextY] && (nextX !== prevX || nextY !== prevY)) {
            let nextCurrent = parseInt("" + current + matrix[nextX][nextY]);
            if (nextCurrent >= maxSteps[step]) {
                let start = [nextX, nextY, "" + current + matrix[nextX][nextY], x, y, nextStep];
                traverse(start, matrix);
            }
        }
    }
};

let result = findMaxPath([
    [9, 8, 7],
    [9, 5, 4],
    [2, 5, 3]
]);

console.log("answer", result);
