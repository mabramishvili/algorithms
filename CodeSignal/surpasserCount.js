function surpasserCount(a) {
    let counter = 0, mod = 1000000007, sorted = [];
    for (let i = a.length - 1; i >= 0; i--) {
        let left = 0, right = sorted.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (a[i] >= sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        counter += sorted.length - left;
        sorted.splice(left, 0, a[i]);
    }
    return ((counter % mod) + mod) % mod;
}

let a = [1, 2, 3, 4, 5];
console.log(surpasserCount(a));