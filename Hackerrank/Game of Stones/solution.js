// Complete the gameOfStones function below.
function gameOfStones(n) {
    let arr = new Array(2).fill(0);
    for(let i=2; i<=n; i++)
        arr[i] = !(arr[i-2] && arr[i-3] && arr[i-5]);
    return arr[n]?"First":"Second";
}

let answer = gameOfStones(2);
console.log("ans", answer);
