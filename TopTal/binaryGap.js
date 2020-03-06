let binaryGap = (n) => {
    let gap = 0, max = 0;
    while(n){
        if(!(n%2)){
            gap++;
        }
        else{
            max = Math.max(max, gap);
            gap = 0;
        }
        n = Math.floor(n/2);
    }
    return max;
};

let answer = binaryGap(115);
console.log("answer", answer);
