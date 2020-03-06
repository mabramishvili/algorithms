// Complete the decentNumber function below.
function decentNumber(n) {
    let num = [], countFives = n, countThrees = 0, lastFiveIndex = n - 1;
    for (let i = 0; i < n; i++) {
        num.push(5);
    }
    while ( (countFives % 3 !== 0 || countThrees % 5 !== 0) && lastFiveIndex >= 0) {
        countFives--;
        num[lastFiveIndex] = 3;
        lastFiveIndex--;
        countThrees++;
    }

    if(countThrees % 5 === 0 && countFives % 3 === 0){
        return num.join("");
    }else{
        return -1;
    }
}

let answer = decentNumber(5);
console.log('answer', answer);
