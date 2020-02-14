// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let luckSum = 0;
    while (k > 0) {
        let maxImportantLuck = 0, maxImportantIndex = -1;
        for (let i = 0; i < contests.length; i++) {
            let contest = contests[i];
            let luck = contest[0], importance = contest[1];
            if (importance === 1 && luck > maxImportantLuck) {
                maxImportantLuck = luck;
                maxImportantIndex = i;
            }
        }
        if (maxImportantIndex !== -1) {
            k--;
            contests[maxImportantIndex][1] = 0;
        }else{
            break;
        }
    }
    for(let contest of contests){
        let luck = contest[0], importance = contest[1];
        if(importance === 1){
            luckSum -= luck;
        }else{
            luckSum += luck;
        }
    }
    return luckSum;
}

let solution = luckBalance(2, [[5, 1], [1, 1], [4, 1]]);
console.log("solve", solution);
