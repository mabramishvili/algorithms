// Complete the minimumPasses function below.
let left = 1, right = 9999999999999;

function minimumPasses(m, w, p, n) {
    binarySearch(m, w, p, n);
    return left;
}

let binarySearch = (m, w, p, n) => {
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (possible(m, w, p, n, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
};

let possible = (m, w, p, candies, mid) => {
    if (m >= (candies + w - 1) / w) return true;
    if (mid <= 1) return false;
    let current = m * w;
    mid--;
    while (true) {
        let left = candies - current, tot = m * w, rounds = Math.floor((left + tot - 1) / tot);
        if (rounds <= mid) return true;
        if (current < p) {
            left = p - current;
            rounds = Math.floor((left + tot - 1) / tot);
            if (rounds >= mid) return false;
            mid -= rounds;
            current += rounds * m * w;
        }
        m > w ? w++ : m++;
        current -= p;
    }
};

let m = 1, w = 1, p = 499999999999, n = 1000000000000;
console.log(minimumPasses(m, w, p, n));