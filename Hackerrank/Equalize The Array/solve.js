// Complete the equalizeArray function below.
function equalizeArray(arr) {
    let map = {}, max = 0;
    for(let value of arr){
        map[value] = map[value] + 1 || 1;
        max = Math.max(max, map[value]);
    }
    return arr.length - max;
}

let arr = [1,2,2,3,5];

console.log(equalizeArray(arr));
