// Complete the acmTeam function below.
function acmTeam(topic) {
    let max = 0, combinations = 0;
    for(let i=0; i<topic.length; i++){
        for(let j=i+1; j<topic.length; j++){
            let countTopics = 0;
            for(let k=0; k<topic[i].length; k++){
                if(topic[i][k] === '1' || topic[j][k] === '1'){
                    countTopics++;
                }
            }
            if(countTopics == max){
                max = countTopics;
                combinations++;
            }
            if(countTopics > max){
                max = countTopics;
                combinations = 1;
            }
            console.log(`${topic[i]} - ${topic[j]}`, countTopics);
        }
    }
    return [max, combinations];
}

let solve = acmTeam(['10101', '11110', '00010']);
