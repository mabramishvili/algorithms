// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    c = c.sort((a, b) => a - b);
    let maxDistance = c[0];
    for (let i = 1; i < c.length; i++) {
        maxDistance = Math.max(maxDistance, parseInt((c[i] - c[i - 1]) / 2));
    }
    return Math.max(maxDistance, n - 1 - c[c.length - 1]);
}


let answer = flatlandSpaceStations(5, [0, 4]);
console.log("answer", answer);
