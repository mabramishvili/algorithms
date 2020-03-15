function maximumSum(a, m) {
    let prefixSums = [], modPrefixSums = [], min = Infinity;
    for (let i = 0; i < a.length; i++) {
        prefixSums[i] = (prefixSums[i - 1] + a[i]) || a[i];
    }
    for (let i = 0; i < a.length; i++) {
        prefixSums[i] = prefixSums[i] % m;
        modPrefixSums.push([prefixSums[i], i]);
    }
    console.log(prefixSums);
    modPrefixSums.sort((a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    console.log(modPrefixSums);
    for (let i = 0; i < modPrefixSums.length - 1; i++) {
        if (modPrefixSums[i][1] > modPrefixSums[i + 1][1]) {
            min = Math.min(min, modPrefixSums[i + 1][0] - modPrefixSums[i][0])
        }
    }
    console.log(min);
    return Math.max(modPrefixSums[modPrefixSums.length-1][0], m - min);
}

let a = [7,7,7,7];
let m = 7;

console.log(maximumSum(a, m));