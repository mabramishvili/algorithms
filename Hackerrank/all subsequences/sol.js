// Complete the checkMagazine function below.

let arr = [];
let arrb = [];

function longestCommonSubsequence(s, b) {
    findSubsequences(s, [], arr);
    findSubsequences(b, [], arrb);
    let length = Math.min(arr.length, arrb.length);
    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arrb[i].includes(arr[i][j])) {
                return arr[i][j];
            }
        }
    }
}

function findSubsequences(s, ans, arr) {
    if (s.length === 0) {
        arr.push(ans);
        return;
    }

    findSubsequences(s.substring(1), ans+s[0], arr);
    findSubsequences(s.substring(1), ans, arr);
}

let res = longestCommonSubsequence("abcd", "abc");
console.log(res);

