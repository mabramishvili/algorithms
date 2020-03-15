function chocolateFeast(n, c, m) {
    let bars = Math.floor(n / c);
    let count = bars;
    while(bars >= m){
        count += Math.floor(bars / m);
        bars = bars % m + Math.floor(bars / m);
    }
    return bars;
}

let n = 15, c = 3, m = 2;
console.log(chocolateFeast(n, c, m));
