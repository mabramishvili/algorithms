// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let places = [], set = [...new Set(scores)];
    for (let score of alice)
        places.push(search(score, set, 0, set.length - 1));
    return places;
}

function search(score, scores, start, end) {
    if (score >= scores[0])
        return 1;
    if (score < scores[scores.length - 1])
        return scores.length + 1;
    let middle = Math.floor((start + end) / 2);
    if (scores[middle] === score || (scores[middle] < score && scores[middle - 1] > score))
        return middle + 1;
    if (score > scores[middle])
        return search(score, scores, start, middle - 1);
    return search(score, scores, middle + 1, end);
}

let scores = [100, 100, 50, 40, 40, 20, 10];
let alice = [5, 25, 50, 120];

console.log("answer", climbingLeaderboard(scores, alice));