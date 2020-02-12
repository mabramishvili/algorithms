function solve(arr) {
    let indexes = new Array(arr.length), counter = 0;
    for(let i in arr)
        indexes[arr[i] - 1] = parseInt(i);
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==i+1){
            indexes[arr[i]-1] = indexes[i];
            [arr[i], arr[indexes[i]]] = [arr[indexes[i]], arr[i]];
            counter++;
        }
    }
    return counter;
}

solve([7, 1, 3, 2, 4, 5, 6]);