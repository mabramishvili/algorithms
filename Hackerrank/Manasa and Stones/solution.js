// Complete the stones function below.
function stones(n, a, b) {
    let posValues = {};
    let ans = [];
    findPosValues(0, 0, a, b, n, posValues);
    for(let key in posValues[n-1]){
        ans.push(parseInt(key));
    }
    ans.sort((a,b)=>a-b);
    return ans;
}

function findPosValues(k, step, a, b, n, posValues) {
    if(step===n){
        return;
    }
    if (!posValues[step]) {
        posValues[step] = {};
    }
    posValues[step][k] = 1;
    let nextStep = ++step;
    findPosValues(k + a, nextStep, a, b, n, posValues);
    findPosValues(k + b, nextStep, a, b, n, posValues);
}

let answer = stones(3, 1, 2);
