// Complete the strangeCounter function below.
function strangeCounter(t) {
    let initial = 3, count = 0;
    while(count + initial < t){
        count+=initial;
        initial*=2;
    }
    return initial - (t - count - 1);
}

let t = 14;
console.log(strangeCounter(t));