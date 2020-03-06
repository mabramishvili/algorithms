// Complete the findDigits function below.
function findDigits(n) {
    let counter = 0;
    let start = n;
    while(start>0){
        let lastDigit = start%10;
        if(lastDigit && n%lastDigit === 0){
            counter++;
        }
        start = Math.floor(start/10);
    }
    return counter;
}

let n = 111;
console.log(findDigits(n));
