// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let map = {};
    for(let element of A){
        map[element] = map[element] + 1 || 1;
    }
    for(let key in map){
        if(map[key] % 2 !== 0){
            return parseInt(key);
        }
    }
}

let answer = solution([9,3,9,3,9,7,9]);
console.log("answer", answer);
