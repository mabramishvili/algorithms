function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0), max = -Infinity, c = 0;

    for (let query of queries) {
        let start = query[0] - 1, end = query[1] - 1, val = query[2];
        arr[start] = arr[start] + val;
        if (end + 1 < n) {
            arr[end + 1] = arr[end + 1] - val;
        }
    }

    for (let i = 0; i < n; i++) {
        c += arr[i];
        max = Math.max(max, c);
    }

    return max;
}

arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);