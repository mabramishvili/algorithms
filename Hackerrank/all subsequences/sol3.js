let memoizeArr = {};

function longestCommonSubsequence(s1, s2) {
    return findSubseq(s1, s2, s1.length - 1, s2.length - 1);
}

function findSubseq(s1, s2, l1, l2) {
    if (memoizeArr[l1] && memoizeArr[l1][l2]) {
        return memoizeArr[l1][l2];
    }
    if (!memoizeArr[l1]) memoizeArr[l1] = {};
    if (l1 < 0 || l2 < 0)
        return "";
    if (s1[l1] === s2[l2]) {
        memoizeArr[l1][l2] = findSubseq(s1, s2, l1 - 1, l2 - 1) + " " + s1[l1];
        return memoizeArr[l1][l2];
    } else {
        let sliceS1Result = findSubseq(s1, s2, l1 - 1, l2);
        let sliceS2Result = findSubseq(s1, s2, l1, l2 - 1);
        if (sliceS1Result.length > sliceS2Result.length) {
            memoizeArr[l1][l2] = sliceS1Result;
        } else {
            memoizeArr[l1][l2] = sliceS2Result;
        }
        return memoizeArr[l1][l2];
    }
}

let res = longestCommonSubsequence(["a", "b", "c", "d"], ["a", "b", "c"]);

console.log("ANSWER", res);