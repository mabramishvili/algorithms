function solution(A) {
    let aux = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i + 1] && A[i - 1] && ((A[i - 1] === A[i]) || (A[i + 1] === A[i]) || (A[i - 1] > A[i] && A[i + 1] < A[i]) || (A[i - 1] < A[i] && A[i + 1] > A[i]))) {
            console.log(A[i]);
        }
    }
}

let answer = solution([5, 4, 3, 2, 6]);
console.log("answer", answer);
