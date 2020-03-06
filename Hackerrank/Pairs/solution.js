// Complete the pairs function below.
function pairs(k, arr) {
    let map = {}, counter = 0;
    for(let value of arr){
        map[value] = true;
    }
    for(let element of arr){
        let search = element - k;
        if(map[search]){
            counter++;
        }
    }
    return counter;
}

let input = [1,5,3,4,2];
let k = 2;
let solution = pairs(k, input);
console.log("solution", solution);
