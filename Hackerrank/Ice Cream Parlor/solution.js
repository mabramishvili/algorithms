// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    let map = {}, answer = [];
    for(let value of cost){
        map[value] = map[value]+1 || 1;
    }
    for(let key in map){
        let leftSum = parseInt(key);
        map[key] = map[key] - 1;
        if(map[money - leftSum]){
            let rightSum = money - leftSum;
            for(let i=0; i<cost.length && answer.length<2; i++){
                if(cost[i] === leftSum || cost[i] === rightSum){
                    answer.push(i+1);
                }
            }
        }
    }
    return answer;
}




let cost = [2,1,3,5,6];
let money = 5;
let solution = whatFlavors(cost, money);

console.log("solution", solution);