// Complete the maximumSum function below.
function maximumSum(a, m) {
    let prefixSums = [], max = a[0] % m, min = Infinity;
    for (let i = 0; i < a.length; i++) {
        prefixSums[i] = (prefixSums[i - 1] + a[i]) || a[i];
    }
    for (let i = 0; i < a.length; i++) {
        prefixSums[i] = prefixSums[i] % m;
        max = Math.max(max, prefixSums[i]);
    }

    console.log(prefixSums);

    for(let i=0; i<prefixSums.length; i++){
        for(let j=i+1; j<prefixSums.length; j++){
            if(prefixSums[i] > prefixSums[j]) {
                min = Math.min(min, prefixSums[i] - prefixSums[j]);
            }
        }
    }

    return Math.max(max, m - min);
}

let a = [2,3,4];
let m = 7;

console.log(maximumSum(a, m));