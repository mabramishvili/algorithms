// Complete the camelcase function below.
function camelcase(s) {
    let wordCount = 1;
    for (let val of s)
        wordCount += val.toUpperCase() === val;
    return wordCount;
}

let s = 'oneTwoThree';
console.log(camelcase(s));