function solution(N) {
    let bin = dec2bin(N).toString().split("");
    let counter = 0, maxBinaryGap = 0, startIndex = 0, endIndex = 0, i=0;
    while(i<bin.length) {
        if(bin[i] === '0' && i>0 && bin[i-1] === '1'){
            while(i<bin.length){
                if(bin[i] === '1'){
                    maxBinaryGap = Math.max(counter, maxBinaryGap);
                    counter = 0;
                    break;
                }else{
                    counter++;
                }
                i++;
            }
        }
        i++;
    }
    return maxBinaryGap;
}

function dec2bin(dec) {
    console.log(dec >>> 0);
    return (dec >>> 0).toString(2);
}

let answer = solution(-20    );