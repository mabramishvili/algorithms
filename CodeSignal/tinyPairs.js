function countTinyPairs(a, b, k) {
    let cnt = 0;
    for(let i=0; i<a.length; i++){
        let element = "" + a[i] + b[a.length-i-1];
        if(parseInt(element) < k){
            cnt++;
        }
    }
    return cnt;
}

let answer = countTinyPairs([1, 2, 3], [1, 2, 3], 31);
console.log("answer", answer);