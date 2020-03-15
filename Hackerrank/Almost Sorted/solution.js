// Complete the almostSorted function below.
function almostSorted(arr) {
    let checkSwap = true, checkReverse = true;
    if (checkSorted(arr)) {
        console.log('yes');
        return;
    }
    for (let i = 0; checkSwap && i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            let prev = i === 0 ? -Infinity : arr[i - 1], next = arr[i + 1];
            for (let j = i + 1; j < arr.length; j++) {
                let prevJ = j === 0 ? -Infinity : arr[j - 1], nextJ = j === arr.length - 1 ? Infinity : arr[j + 1];
                if (arr[j] >= prev && arr[j] <= next && arr[i] >= prevJ && arr[i] <= nextJ) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    if (checkSorted(arr)) {
                        console.log('yes');
                        console.log(`swap ${i + 1} ${j + 1}`);
                        return;
                    }
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                checkSwap = false;
            }
        }
    }
    for (let i = 0; checkReverse && i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            for (let j = i + 1; j < arr.length; j++) {
                let nextJ = j === arr.length - 1 ? Infinity : arr[j + 1];
                if (j === arr.length - 1 || nextJ > arr[j]) {
                    let clone = [...arr], ind = 0;
                    for (let k = j; k >= i; k--) {
                        clone[k] = arr[i + ind];
                        ind++;
                    }
                    if (checkSorted(clone)) {
                        console.log('yes');
                        console.log(`reverse ${i + 1} ${j + 1}`);
                        return;
                    }
                    checkReverse = false;
                    break;
                }
            }
        }
    }
    console.log('no');
}

let checkSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++)
        if (arr[i + 1] < arr[i]) return false;
    return true;
};

let arr = [1, 5, 4, 3, 2, 6];
almostSorted(arr);