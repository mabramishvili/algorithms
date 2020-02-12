function stockmax(prices) {
    let profit = 0, max = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        max = Math.max(prices[i], max);
        profit += max - prices[i];
    }
    return profit;
}

let answer = stockmax([1, 2, 100, 197]);
console.log("answer", answer);
