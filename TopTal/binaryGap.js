let binaryGap = (n) => {
    let gap = 0, max = 0;
    if (n === 0) {
        return 1;
    }
    console.log("binary", n.toString(2));
    while (n) {
        console.log("n", n);
        if (!(n % 2)) {
            gap++;
        } else {
            gap = 0;
        }
        max = Math.max(max, gap);
        n = Math.floor(n / 2);
    }
    return max;
};

let answer = binaryGap(0);
console.log("answer", answer);
