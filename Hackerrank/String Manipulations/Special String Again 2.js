// Complete the substrCount function below.

function substrCount(n, s) {
    console.log("here");
    if (n === 1) return 1;
    let arr = [], counter = 1, cur = s[0], totalCounter = 0;
    for (let i = 1; i < n; i++) {
        if (s[i] === cur) {
            counter++;
        } else {
            arr.push([cur, counter]);
            counter = 1;
            cur = s[i];
        }
    }
    arr.push([cur, counter]);

    for (let obj of arr) {
        totalCounter += Math.floor((obj[1] * (obj[1] + 1)) / 2);
    }

    for(let i=1; i<arr.length-1; i++){
        if(arr[i-1][0]===arr[i+1][0] && arr[i][1] === 1){
            totalCounter += Math.min(arr[i-1][1], arr[i+1][1]);
        }
    }

    console.log("arr", arr);
    return totalCounter;
}


const answer = substrCount(8, "mnonopoo");
console.log("answer", answer);