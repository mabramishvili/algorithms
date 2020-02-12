function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);
    let max = -Infinity;
    for (let query of queries) {
        for (let i = query[0]; i <= query[1]; i++) {
            arr[i - 1] += query[2];
            if (arr[i - 1] > max) {
                max = arr[i - 1];
            }
        }
    }
    return max;
}

// function arrayManipulation(n, queries) {
//     let arr = new Array(n).fill(0);
//     let max = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         for (let query of queries) {
//             if (i + 1 >= query[0] && i + 1 <= query[1]) {
//                 arr[i] += query[2];
//                 if (arr[i] > max) {
//                     max = arr[i];
//                 }
//             }
//         }
//     }
//     return max;
// }

arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);