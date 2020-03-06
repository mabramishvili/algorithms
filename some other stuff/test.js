let division = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = n / 10;
        n -= n % 1;
    }

    return sum;


};

let answer = division(187);
console.log("answer", answer);
