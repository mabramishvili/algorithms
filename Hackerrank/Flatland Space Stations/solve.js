// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    let stationMap = {}, maxDistance = 0;
    for (let value of c) {
        stationMap[value] = stationMap[value] + 1 || 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (stationMap[i + j]) {
                i = i + 2 * j;
            }
            if (stationMap[i - j] || stationMap[i + j] || (i + j >= n && i - j < 0)) {
                break;
            }
            if (i + j >= n && i - j >= 0) {
                if (!stationMap[i - j]) {
                    maxDistance = Math.max(maxDistance, j + 1);
                }
            } else if (i + j < n && i - j < 0) {
                if (!stationMap[i + j]) {
                    maxDistance = Math.max(maxDistance, j + 1);
                }
            } else {
                if (!stationMap[i + j] && !stationMap[i - j]) {
                    maxDistance = Math.max(maxDistance, j + 1);
                }
            }
        }
    }

    return maxDistance;
}

let answer = flatlandSpaceStations(5, [0, 4]);
console.log("answer", answer);
