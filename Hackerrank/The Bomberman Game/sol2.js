// Complete the bomberMan function below.
function bomberMan(n, grid) {

    if(n<=1){
        return grid;
    }

    if(n%2 === 0){
        let arr = [];
        for(let i=0; i<grid.length; i++){
            arr[i] = 'O'.repeat(grid[0].length);
        }
        return arr;
    }

    for(let key in grid){
        grid[key] = grid[key].split("");
    }

    let map = [grid, grid];
    let second = 2, op = 'PLANT', directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (second <= n && second <= 5) {

        let curGrid = map[second-1].map(function(arr) {return arr.slice();});

        switch (op) {
            case 'PLANT':
                for (let i = 0; i < curGrid.length; i++) {
                    for (let j = 0; j < curGrid[0].length; j++) {
                        if (curGrid[i][j] === '.') {
                            curGrid[i][j] = "O";
                        }
                    }
                }
                break;
            case 'OBSERVE':
                let copy = map[second-1].map(function(arr) {return arr.slice();});
                for (let i = 0; i < curGrid.length; i++) {
                    for (let j = 0; j < curGrid[0].length; j++) {
                        if (copy[i][j] === 'O' && map[second - 3][i][j] === 'O') {
                            curGrid[i][j] = '.';
                            for(let dir of directions){
                                let [newRow, newColumn] = [i+dir[0], j+dir[1]];
                                if(curGrid[newRow] && curGrid[newRow][newColumn]){
                                    curGrid[newRow][newColumn] = '.';
                                }
                            }
                        }
                    }
                }
                map[second-1] = curGrid;

                break;
        }
        map[second] = curGrid;
        second++;
        op = op === 'PLANT' ? 'OBSERVE' : 'PLANT';
    }

    if(n>5 && n%4===3){
        n = 3;
    }
    if(n>5 && n%4===1){
        n = 5;
    }

    for(let key in map[n]){
        map[n][key] =  map[n][key].join("");
    }

    return map[n];
}

let grid = [
    '.......',
    '...O.O.',
    '....O..',
    '..O....',
    'OO...OO',
    'OO.O...'
];

let answer = bomberMan(5, grid);

console.log(answer);