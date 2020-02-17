// Complete the stones function below.
function stones(n, a, b) {
    let min = (n - 1) * Math.min(a, b), max = (n - 1) * Math.max(a, b), ans = [];
    while (min < max) {
        ans.push(min);
        min += Math.abs(a - b);
    }
    ans.push(max);
    return ans;
}


let answer = stones(3, 1, 2);

console.log("ans", answer);
