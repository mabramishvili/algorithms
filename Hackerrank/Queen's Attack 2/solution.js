// Complete the queensAttack function below.

function queensAttack(n, k, r_q, c_q, obstacles) {
    let directions = [[1, 1], [-1, -1], [1, 0], [0, 1], [-1, 0], [0, -1], [1, -1], [-1, 1]],
        map = {}, counter = 0;
    for (let obstacle of obstacles) {
        map[obstacle[0]] = map[obstacle[0]] || {};
        map[obstacle[0]][obstacle[1]] = 1;
    }
    for (let direction of directions) {
        let row = r_q, column = c_q, nextRow = row + direction[0], nextColumn = column + direction[1];
        while (nextRow <= n && nextRow >= 1 && nextColumn <= n && nextColumn >= 1 && (!map[nextRow] || !map[nextRow][nextColumn])) {
            [nextRow, nextColumn] = [nextRow + direction[0], nextColumn + direction[1]];
            counter += 1;
        }
    }
    return counter;
}

let n = 100000;
let k = 0;
let r_q = 4187;
let c_q = 5068;
let obstacles = [];

console.log(queensAttack(n, k, r_q, c_q, obstacles));
