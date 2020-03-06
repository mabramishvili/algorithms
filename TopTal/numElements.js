let solution = (arr, x) => {
    let map = {}, leftMap = {};
    for(let val of arr){
        map[val] = map[val] + 1 || 1;
    }
    for(let i=0; i<arr.length; i++){
        if(leftMap[x] === map[x]){
            return i;
        }
        map[arr[i]] = map[arr[i]] - 1;
        leftMap[arr[i]] = leftMap[arr[i]] + 1 || 1;
    }
    console.log("map", map);
};

let solve = solution([1,2,4,3,4,5,4,10,15,4], 4);

console.log("answer", solve);
