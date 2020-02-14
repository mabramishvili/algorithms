// Complete the squares function below.
function squares(a, b) {
    let count = 0;
    for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) {
        if (i * i >= a && i * i <= b) count++;
    }
    return count;
}

let answer = squares(24, 49);
console.log("answer", answer);
