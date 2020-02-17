// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    return ((s - 2) + m) % n + 1;
}

let answer = saveThePrisoner(5, 2, 1);
console.log('answer', answer);
