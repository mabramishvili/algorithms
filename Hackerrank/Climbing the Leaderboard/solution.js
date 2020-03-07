// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let places = [], memo = {};
    for(let score of alice){
        let foundInMemo = false;
        for(let range in memo){
            let spl = range.split(",");
            let min = spl[0], max = spl[1];
            if(score>=min && score<=max){
                places.push(memo[range]);
                foundInMemo = true;
                break;
            }
        }
        if(foundInMemo){
            continue;
        }
        let index = search(score, scores, 0, scores.length-1);
        if(index === 0){
            places.push(1);
        }else{
            let place = 1;
            for(let i=0; i<index; i++){
                if(scores[i]!==scores[i+1]){
                    place++;
                }
            }
            if(scores[index]>score){
                place++;
            }
            let tillValue = scores[index]>score?scores[scores.length-1]:scores[index-1];
            memo[`${score},${tillValue-1}`] = place;

            places.push(place);
        }

        //console.log(`index for ${score}`, index);
        //return;
    }
    console.log(memo);


    return places;
}

function search(score, scores, start, end) {
    if(score>=scores[0]) return 0;
    if(score<=scores[scores.length-1]){
        let start = scores.length-1;
        while(start > 0 && scores[start-1] === score){
            start--;
        }
        return start;
    }
    let middle = Math.floor((start+end)/2);
    if(scores[middle] === score){
        while(middle > 0 && scores[middle-1] === score){
            middle--;
        }
        return middle;
    }
    if(scores[middle] < score && scores[middle-1] > score){
        return middle;
    }
    if(score>scores[middle]){
        return search(score, scores, start, middle-1);
    }else{
        return search(score, scores, middle+1, end);
    }
}

let scores = [100, 100, 50, 40, 40, 20, 10];
let alice = [5, 25, 50, 120];

console.log("answer", climbingLeaderboard(scores, alice));