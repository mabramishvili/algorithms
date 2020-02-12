const sudoku2 = (grid) => {
    let mySet = new Set();
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            let rowCheck = `${grid[i][j]} in row ${i}`;
            let columnCheck = `${grid[i][j]} in column ${j}`;
            let squareCheck = `${grid[i][j]} in square ${Math.floor(i/3)} ${Math.floor(j/3)}`;

            if(mySet.has(rowCheck) || mySet.has(columnCheck) || mySet.has(squareCheck)){
                return false;
            }

            if(grid[i][j] !== '.') {
                mySet.add(rowCheck);
                mySet.add(columnCheck);
                mySet.add(squareCheck)
            }
        }
    }
    return true;
};

let answer = sudoku2(
    [
        [".", ".", ".", "1", "4", ".", ".", "2", "."],
        [".", ".", "6", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "1", ".", ".", ".", ".", ".", "."],
        [".", "6", "7", ".", ".", ".", ".", ".", "9"],
        [".", ".", ".", ".", ".", ".", "8", "1", "."],
        [".", "3", ".", ".", ".", ".", ".", ".", "6"],
        [".", ".", ".", ".", ".", "7", ".", ".", "."],
        [".", ".", ".", "5", ".", ".", ".", "7", "."]
    ]);

console.log("Answer", answer);