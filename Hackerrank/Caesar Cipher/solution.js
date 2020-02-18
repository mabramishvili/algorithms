// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let alphabet = [], result = '';
    for (let i = 97; i <= 122; i++)
        alphabet.push(String.fromCharCode(i));

    for (let char of s) {
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            let shifted = alphabet[(index + k) % alphabet.length];
            result += isUpperCase ? shifted.toUpperCase() : shifted;
        } else {
            result += char;
        }
    }

    return result;
}

let answer = caesarCipher("middle-Outz", 2);
console.log("answer", answer);
