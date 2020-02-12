function solution(A, K) {
    while (K--)
        A = rotate(A);
    return A;
}

function rotate(A, K) {
    let tmp = [];
    for (let i = 0; i < A.length; i++) {
        if (i === A.length - 1) {
            tmp[0] = A[i];
        } else {
            tmp[i + 1] = A[i];
        }
    }
    return tmp;
}

let answer = solution([], 0);
console.log("answer", answer);