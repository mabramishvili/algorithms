// Complete the minimumDistances function below.
function minimumDistances(a) {
    let map = {}, min = Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] in map) {
            min = Math.min(min, i - map[a[i]]);
        }
        map[a[i]] = i;
    }

    return min === Infinity ? -1 : min;
}

let a = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(a));