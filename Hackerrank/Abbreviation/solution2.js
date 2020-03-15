// Complete the abbreviation function below.
let memoize = {};

function abbreviation(a, b) {
    memoize = {};
    if (check(a, b)) {
        return "YES";
    }
    return "NO";
}

let check = (a, b) => {
    if (a.length < b.length) {
        return false;
    }
    if (b.length === 0) {
        return a.toLowerCase() === a;
    }
    if (memoize[a + "//" + b]) {
        return memoize[a + "//" + b];
    }
    let lastA = a[a.length - 1];
    let lastB = b[b.length - 1];
    if (lastA === lastB || lastA.toUpperCase() === lastB) {
        if (lastA.toUpperCase() === lastA) {
            return memoize[a + "//" + b] = check(a.substring(0, a.length - 1), b.substring(0, b.length - 1));
        } else {
            return memoize[a + "//" + b] = check(a.substring(0, a.length - 1), b.substring(0, b.length - 1)) || check(a.substring(0, a.length - 1), b);
        }
    } else {
        if (lastA.toLowerCase() === lastA) {
            return memoize[a + "//" + b] = check(a.substring(0, a.length - 1), b);
        } else {
            return false;
        }
    }
};

// let a = 'bbBbbbbbrbBbbBbbbbbbbbbrbbbbbBbbbbbbbbbbbbbbobbbbbbbsbbbbbtbBbsbbtbbbbbbbobbbbbbbbbbsbbbbbbbbbbbbbbsbbbbbbbbbbrbrbbBbbbbbbTBbbbbbbbbbbbtbbbbbbbbbbbbbbbbBbbbobbbbbbbbbbbbbtbbbbbbbBbbbbbbbbbBbbsbbbbbbbbobbbbbbbsbbbbbbbbbbbbbbbbbbbbbbtbbbbbbbbrbbbbBbbbbbbbbsbbbbbbobBborbbbbbbbbbbrbbbbbbbbbbbbbbbbbbbbbbbbbtbbbbtbbbbbbbbtbbbbbbbbbbbbbbbbbbbbbbbBbobbbbbBbbbbbbbbbbbbbbbBobbbbbbbbbBbbbrbbbbbbbbbbtbboBbbbbbbbbbbbbSbbbtbbbbbbbbbbbbbbbbbbbbbbtbbbrbbbbbBbbbbbbbbbobbbbbbbbbbbbbbsbbbbbbtbrbbrbbbbbbobbbbbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbBbbbbbBbbbbbbbbbbBbbbbbbbbbbbObbtrbsbbbbbbbbbbbbbbbbbbbbrbbbbbbbobbbbbbbbbbbbbbbbbBbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbbbbBbbBbbbbbrbbbbbbbbbbbbbbbbbbbbrbbbsbbbbbrbbbbbbbbbbbrobbbbsbbbbbsbbbBbbbbbbbbbbtTbbbbbbbbbbbbtbbtrbobbbbbbbbbbbbbBbbbbbbsbbbbbbbbbbbbbbbbbbBbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbobbbTbsBbbbbbbbbbbbbsbbbbbssbbbbbbbbbSbbbbbbbbbbbbbbsbbbbbbbbbbbbbBbbbbbbbbbbbbbsbbbbBbbtbbSbbbbbbbbbbbbbsbobbbBbbbrbBbbbbbbbbbbbBbbobbbbbbbbbbbbbbbbbbbbtbosbbbbbbbbtbbbbbbbbbbrbb';
// let b = 'BBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBOBBBBBSBBBBTBBBSBBTBBBBBBBBBBBBBSBBBBBBBBBBBBBSBBBBBBBRBBBBBBBBBTBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBSBBBBBBOBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBOBBBORBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBTBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBOBBBBBBBBBBSBBTBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBTBBBRBBBBBOBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBOBTRBSBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBRBBBBBBRBBBBBBBBBBROBBBBBBBBSBBBBBBBBBBBBBTTBBBBBBBBBBBTBBTROBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBOBBBTBSBBBBBBBBBBSBBBSBBBBBBSBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBTBBSBBBBBBBBBBSBOBBBBBBRBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBTBSBBBBBBTBBBBBBBBRB';

let a = 'Pi';
let b = 'P';

let answer = abbreviation(a, b);
console.log("answer", answer);
