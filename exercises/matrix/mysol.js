// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


let visitedNodes = [];
const directions = ['right', 'bottom', 'left', 'up'];
let directionIndex = 0;
let direction = directions[directionIndex];

function matrix(n) {
    let value = 1;
    let x = 0, y = -1;
    let oldX = x, oldY = y;
    let arr = generateArray(n);
    while (value <= n * n) {
        oldY = y;
        oldX = x;
        switch (direction) {
            case 'right':
                y += 1;
                break;
            case 'left':
                y -= 1;
                break;
            case 'bottom':
                x += 1;
                break;
            case 'up':
                x -= 1;
                break;
        }
        if (isVisited(x,y)) {
            x = oldX;
            y = oldY;
            changeDirection();
            continue;
        }
        if ((y === n - 1 && direction === 'right') ||
            (x === n - 1 && direction === 'bottom') ||
            (y === 0 && direction === 'left') ||
            (x === 0 && direction === 'up')) {
            changeDirection();
        }
        arr[x][y] = value;
        value++;
        setVisited(x,y);
    }

    console.log("arr", arr);
}

function generateArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}

function isVisited(x,y){
    return visitedNodes.filter(e => e.x === x && e.y === y).length > 0;
}

function changeDirection(){
    directionIndex++;
    if (directionIndex === directions.length) {
        directionIndex = 0;
    }
    direction = directions[directionIndex];
}

function setVisited(x,y){
    visitedNodes.push({'x': x, 'y': y});
}

matrix(4);

module.exports = matrix;
