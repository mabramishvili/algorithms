const sudoku2 = (grid) => {
    if (grid.length !== 9) {
        return false;
    }

    for (let i = 0; i < grid.length; i++) {
        if (grid[i].length !== 9) {
            return false;
        }
        if (!checkRow(grid, i)) {
            return false;
        }
        if (!checkColumn(grid, i)) {
            return false;
        }
    }

    let startRow = 0, startColumn = 0;
    while (true) {
        let obj = {};
        for (let i = startRow; i <= startRow + 2; i++) {
            for (let j = startColumn; j <= startColumn + 2; j++) {
                if (grid[i][j] !== '.' && obj[grid[i][j]]) {
                    return false;
                }
                obj[grid[i][j]] = 1;
            }
        }

        startColumn += 3;
        if (startColumn === grid.length) {
            startColumn = 0;
            startRow += 3;
            if (startRow === grid.length) {
                break;
            }
        }

    }

    return true;

};

const checkRow = (grid, row) => {
    let obj = {};
    for (let i = 0; i < grid[row].length; i++) {
        if (grid[row][i] !== '.' && obj[grid[row][i]]) {
            return false;
        }
        obj[grid[row][i]] = 1;
    }
    return true;
};

const checkColumn = (grid, column) => {
    let obj = {};
    for (let i = 0; i < grid[column].length; i++) {
        if (grid[i][column] !== '.' && obj[grid[i][column]]) {
            console.log("FALSE");
            return false;
        }
        obj[grid[i][column]] = 1;
    }
    return true;
};

let answer = sudoku2(
    [[".", ".", ".", "1", "4", ".", ".", "2", "."],
        [".", ".", "6", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "1", ".", ".", ".", ".", ".", "."],
        [".", "6", "7", ".", ".", ".", ".", ".", "9"],
        [".", ".", ".", ".", ".", ".", "8", "1", "."],
        [".", "3", ".", ".", ".", ".", ".", ".", "6"],
        [".", ".", ".", ".", ".", "7", ".", ".", "."],
        [".", ".", ".", "5", ".", ".", ".", "7", "."]]);

console.log("Answer", answer);