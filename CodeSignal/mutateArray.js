function mutateTheArray(n, a) {
    let b = [];
    for (let i = 0; i < n; i++) {
        let first = a[i - 1] || 0;
        let second = a[i] || 0;
        let third = a[i + 1] || 0;
        b[i] = first + second + third;
    }
    return b;
}

let answer = mutateTheArray(5,[4, 0, 1, -2, 3]);
console.log("answer", answer);