const longestCommonSubsequence = (s1, s2) => {
    const removeDistinct = (s1, s2) => s1.filter(c => s2.includes(c));
    const findFirstSeq = (s1, s2) => {
        let seq = [], i, j = 0;
        for (i = 0; i < s1.length; i++) {
            const c = s1[i];
            while (j++ < s2.length) {
                if (seq.length + (s2.length - j - 2) < max) {
                    return ""
                }
                if (c === s2[j - 1]) {
                    seq.push(c);
                    break;
                }
            }
        }
        return seq
    };
    const findSubseq = (s1, s2) => {
        if (s2.length <= max || s1.length <= max) {
            return maxSeq
        }
        while (s1.length && s1.length > max) {
            const seq = findFirstSeq(s1, s2);
            if (seq.length > max) {
                max = seq.length;
                s1 = s1.slice(max);
                maxSeq = seq;
            } else {
                s1 = s1.slice(1)
            }
        }
        return maxSeq;
    };
    let max = 0, maxSeq;
    if (s1 === s2) {
        return s1
    }
    const s1D = removeDistinct(s1, s2);
    const s2D = removeDistinct(s2, s1);
    if (s1D === s2D) {
        return s1D
    }
    findSubseq(s1D, s2D);
    return findSubseq(s2D, s1D).join(" ");
};

let res = longestCommonSubsequence([3, 9, 8, 3, 9, 7, 9, 7, 0], [3, 3, 9, 9, 9, 1, 7, 2, 0, 6]);
console.log(res);
