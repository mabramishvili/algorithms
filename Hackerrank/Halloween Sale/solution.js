// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    let count = 0;
    while (s - p >= 0) {
        s = s - p;
        p = p - d <= m ? m : p - d;
        count++;
    }
    return count;
}

let p = 20, d = 3, m = 6, s = 80;
console.log(howManyGames(p, d, m, s));