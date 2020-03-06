// Complete the stringConstruction function below.
function stringConstruction(s) {
    let p = s[0], countOperations = 1;
    for (let i = 1; i < s.length; i++) {
        let current = s[i], substring = current, foundSubstring = false;
        while (p.includes(current) && i < s.length) {
            foundSubstring = true;
            substring = current;
            i++;
            current += s[i];
        }
        p += substring;
        if (!foundSubstring) {
            countOperations++;
        } else {
            i--;
        }
    }
    return countOperations;
}

let answer = stringConstruction("aadd");
console.log("answer", answer);
