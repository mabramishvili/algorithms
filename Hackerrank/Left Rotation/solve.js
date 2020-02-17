function solve(a, d) {
    let res = [], minimizedShift = d % a.length, rightShift = a.length - minimizedShift;
    for (let i = 0; i < a.length; i++) {
        res[(i + rightShift) % a.length] = a[i];
    }
    console.log(res);
}

let solution = solve([1, 2, 3, 4, 5], 2);
