let solution = (n) => {
    let count = 0;
    n = n*100;
    while(n>0){
        count++;
        if(n>=100) n-=100;
        else if(n>=50) n-=50;
        else if(n>=25) n-=25;
        else if(n>=10) n-=10;
        else n-=1;
    }

    return count;

};

let answer = solution(17.27);
console.log("answer", answer);
