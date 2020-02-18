// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let maxValue = 0, maxId = 0, map = {};
    for (let value of arr) {
        map[value] = map[value] + 1 || 1;
        if(map[value] === maxValue && value < maxId){
            maxId = value;
        }
        if(map[value] > maxValue){
            maxId = value;
            maxValue = map[value];
        }
    }
    return maxId;
}

let solve = migratoryBirds([1, 1, 2, 2, 3]);
