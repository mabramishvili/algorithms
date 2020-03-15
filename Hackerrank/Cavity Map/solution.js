// Complete the cavityMap function below.
function cavityMap(grid) {
    grid = grid.map(x => x.split("").map(x => parseInt(x)));
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]],
        clone = grid.map(x => x.slice());
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let cavity = true;
            for (let dir of directions) {
                let [x, y] = dir;
                if (!grid[i + x] || typeof grid[i + x][j + y] === 'undefined' || grid[i + x][j + y] >= grid[i][j]) {
                    cavity = false;
                }
            }
            if (cavity) {
                clone[i][j] = 'X';
            }
        }
    }
    clone = clone.map(x => x.join(""));
    return clone;
}

let grid = [
    '179443854',
    '961621369',
    '164139922',
    '968633951',
    '812882578',
    '257829163',
    '812438597',
    '176656233',
    '485773814'
];

console.log(cavityMap(grid));