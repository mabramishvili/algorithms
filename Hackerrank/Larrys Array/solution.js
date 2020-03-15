function larrysArray(A) {
    if (checkSorted(A))
        return 'YES';
    for (let i = 0; i < A.length - 1; i++) {
        let optimalValue = i + 1;
        while (A[i] !== optimalValue) {
            let index = A.indexOf(optimalValue);
            if (index === A.length - 1) {
                let prev = A[index - 1], prevPrev = A[index - 2];
                A[index - 1] = optimalValue;
                A[index - 2] = prev;
                A[index] = prevPrev;
            } else {
                let prev = A[index - 1], next = A[index + 1];
                A[index - 1] = optimalValue;
                A[index] = next;
                A[index + 1] = prev;
            }
        }
    }
    if(checkSorted(A))
        return 'YES';
    return 'NO;'
}

let checkSorted = (A) => {
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i + 1] < A[i]) {
            return false;
        }
    }
    return true;
};

let A = [1, 6, 5, 2, 4, 3];
console.log(larrysArray(A));