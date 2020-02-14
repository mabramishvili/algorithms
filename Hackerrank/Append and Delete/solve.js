// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    let baseLetters = 0, minLength = Math.min(s.length, t.length), totalLetters = s.length + t.length;
    for (let i = 0; i < minLength; i++) {
        if (s[i] === t[i]) baseLetters++;
        else break;
    }
    let differentLetters = totalLetters - 2 * baseLetters;
    if (differentLetters > k) {
        return "No";
    } else if (k > totalLetters) {
        return "Yes";
    } else if (checkSameType(differentLetters, k)) {
        return "Yes";
    }
    return "No";
}

function checkSameType(n, k) {
    return n % 2 === k % 2;
}

let answer = appendAndDelete('hackerhappy', 'hackerrank', 9);
