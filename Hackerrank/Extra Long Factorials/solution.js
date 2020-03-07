// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let fact = BigInt(1);
    for (let i = 2; i <= n; i++) {
        fact *= BigInt(i);
    }
    console.log(fact.toString());
}

let n = 25;
extraLongFactorials(n);