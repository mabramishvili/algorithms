function solve(s){
    let arr = s.split(",");
    const obj = {};
    for(let val of arr){
        obj[val] = obj[val] + 1 || 1;
    }
    for(let key in obj){
        if(obj[key]>1){
            return key;
        }
    }
}

let answer = solve("1,2,3,4,5,6,7,7,8,6,10");
console.log("ans", answer);