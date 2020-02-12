const cloneDeep = require('lodash.clonedeep');
const fs = require('fs');

function solve() {
    const contents = fs.readFileSync('./input2.txt', 'utf8');
    let array = contents.split("\r\n").map(x => x.split('')), directions = calculateDirections(50), maxCount = -Infinity;
    let coords = null;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== '#') continue;
            let tmp = cloneDeep(array);
            for (let direction of directions) {
                let x = i, y = j, foundAsteroid = false;
                while (true) {
                    [x,y] = [x+direction[0], y+direction[1]];
                    if (x >= array.length || y >= array[i].length || x < 0 || y < 0) {
                        break;
                    }
                    if (tmp[x][y] === '#') {
                        if (foundAsteroid) {
                            tmp[x][y] = '-';
                        } else {
                            foundAsteroid = true;
                        }
                    }
                }
            }
            tmp[i][j] = 'S';
            let counter = countAsteroids(tmp);
            if(counter>maxCount){
                maxCount = counter;
                coords = `${i}, ${j}`;
            }
        }

    }
    console.log("coords",coords);
    return maxCount;
}

countAsteroids = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '#') {
                counter++;
            }
        }
    }
    return counter;
};

calculateDirections = (size) => {
    let directions = [];
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            if(i!==0 || j!==0)
                directions.push([i,j]);
            if(i!==0)
                directions.push([-i, j]);
            if(j!==0)
                directions.push([i, -j]);
            if(i!==0 && j!==0)
                directions.push([-i,-j]);
        }
    }
    return directions;
};

let result = solve();

console.log(result);
