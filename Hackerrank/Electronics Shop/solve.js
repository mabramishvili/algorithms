/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    let l = drives.length-1, max = 0;
    keyboards = keyboards.sort((a,b) => a-b);
    drives = drives.sort((a,b) => a-b);
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<=l; j++){
            if(keyboards[i] + drives[j] <= b){
                max = Math.max(max, keyboards[i] + drives[j]);
            }else{
                l = j - 1;
                if(l<0){
                    return max?max:-1;
                }
            }
        }
    }
    return max?max:-1;
}

let keyboards = [40,50,60];
let drives = [5,8,12];
let b = 60;

console.log(getMoneySpent(keyboards, drives, b));
