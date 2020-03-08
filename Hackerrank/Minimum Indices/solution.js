// Complete the minimumDistances function below.
function minimumDistances(a) {
    let map = {}, min = Infinity;
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = map[a[i]] || [];
        map[a[i]].push(i);
    }
    for (let key in map) {
        for (let i = 0; i < map[key].length - 1; i++) {
            min = Math.min(min, map[key][i + 1] - map[key][i]);
        }
    }
    return min === Infinity ? -1 : min;
}

let a = [3, 2, 1, 2, 3];
console.log(minimumDistances(a));