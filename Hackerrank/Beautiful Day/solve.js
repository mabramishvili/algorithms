// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let counter = 0;
    for(let z = i; z<=j; z++){
        if(Math.abs(z - reverse(z))%k===0){
            counter++;
        }
    }
    return counter;
}

function reverse(n){
    let s = n.toString(), start = '', nonZeroFound = false;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]!='0') nonZeroFound = true;
        if(nonZeroFound){
            start+=s[i];
        }
    }
    return parseInt(start);
}


let i = 20;
let j = 23;
let k = 6;

console.log(beautifulDays(i,j,k));
